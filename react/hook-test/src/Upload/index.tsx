import { ChangeEvent, PropsWithChildren, useRef, useState } from "react";
import axios from 'axios';
import UploadList, { UploadFile } from './UploadList';
import Dragger from './Dragger';

import './index.scss';

export interface UploadProps extends PropsWithChildren {
  action: string; // 需要上传的路径
  data?: Record<string, any>; // 需要给请求携带的额外参数
  name?: string; // 上传文件的名称，默认file
  headers?: Record<string, any>; // 请求额外携带的请求头
  accept?: string; // 接收的上传类型
  multiple?: boolean; // 是否可以多选
  withCredentials?: boolean; // 跨域请求是否携带凭证
  beforeUpload?: (file: File) => boolean | Promise<File>; // 上传前的钩子
  onProgress?: (percentage: number, file: File) => void; // 上传中的钩子
  onSuccess?: (data: any, file: File) => void; // 上传成功的钩子
  onError?: (err: any, file: File) => void; // 上次失败的钩子
  onChange?: (file: File) => void; // 状态改变的钩子
  onRemove?: (file: UploadFile) => void; //  删除某个文件的钩子
  drag?: boolean;
}

export const Upload: React.FC<UploadProps> = props => {
  const {
    children,
    action,
    data,
    name,
    headers,
    accept,
    multiple,
    withCredentials,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    drag,
  } = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const updateFileList = (updateFile: UploadFile, updateObject: Partial<UploadFile>) => {
    setFileList(preList => {
      return preList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObject };
        } else {
          return file
        }
      })
    })
  };

  const handleRemove = (file: UploadFile) => {
    setFileList(preList => {
      return preList.filter(item => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if(fileInput.current) {
      fileInput.current.value = '';
    }
  }

  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile);
          })
        } else if (result !== false) {
          post(file);
        }
      }
    })
  }

  const post = (file: File) => {
    let uploadFile: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList(preList => [uploadFile, ...preList]);
    const formData = new FormData();
    formData.append(name || 'file', file);
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data',
      },
      withCredentials,
      onUploadProgress: e => {
        let percentage = Math.round((e.loaded * 100) / e.total!) || 0;
        if (percentage < 100) {
          updateFileList(uploadFile, { percent: percentage, status: 'uploading' });
          if (onProgress) {
            onProgress(percentage, file);
          }
        }
      },
    }).then(resp => {
      updateFileList(uploadFile, { status: 'success', response: resp.data });
      onSuccess?.(resp.data, file);
      onChange?.(file);
    }).catch(err => {
      updateFileList(uploadFile, { status: 'error', error: err });
      onError?.(err, file);
      onChange?.(file);
    })
  }

  return(
    <div className="upload-component">
      <div className="upload-input" onClick={handleClick}>
        {/* {children} */}
        {
          drag ? <Dragger onFile={files => {uploadFiles(files)}}>
            {children}
          </Dragger> : children
        }
        <input
          className="upload-file-input"
          type="file"
          ref={fileInput}
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
        />
      </div>
      <UploadList
          fileList={fileList}
          onRemove={handleRemove}
      />
    </div>
  )
}

export default Upload