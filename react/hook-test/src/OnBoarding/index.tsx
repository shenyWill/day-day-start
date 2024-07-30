import { Button, Popover } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";
import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Mask } from './../Mask';

export interface OnBoardingStepConfig {
  /**
   * 每一步选中的元素
   */
  selector: () => HTMLElement | null;
  /**
   * popover的位置
   */
  placement?: TooltipPlacement;
  /**
   * popover里面的渲染内容
   * @param currentStep 当前第几步
   * @returns 
   */
  renderContent?: (currentStep: number) => React.ReactNode;
  /**
   * 点击下一步前的回调
   * @param currentStep 当前第几步
   * @returns 
   */
  beforeForward?: (currentStep: number) => void;
  /**
   * 点击上一步前的回调
   * @param currentStep 当前第几步
   * @returns 
   */
  beforeBack?: (currentStep: number) => void;
}

export interface OnBoardingProps {
  step?: number;
  steps: OnBoardingStepConfig[];
  getContainer?: () => HTMLElement; // 包裹的元素
  onStepsEnd?: () => void;
}

export const OnBoarding: FC<OnBoardingProps> = props => {
  const {
    step = 0,
    steps,
    onStepsEnd,
    getContainer,
  } = props;

  const [currentStep, setCurrentStep] = useState(0);

  const [done, setDone] = useState(false);
  
  const currentSelectedElement = steps[currentStep]?.selector();

  const [isMoving, setIsMoving] = useState(false);

  const currentContainer = getContainer?.() || document.documentElement;

  const getCurrentStep = () => {
    return steps[currentStep]
  }

  const back = () => {
    if (currentStep === 1) {
      return;
    }
    const { beforeBack } = getCurrentStep();
    beforeBack?.(currentStep);
    setCurrentStep(currentStep - 1);
  }

  const forward = () => {
    if (currentStep === steps.length - 1) {
      onStepsEnd?.();
      setDone(true);
      return;
    }
    const { beforeForward } = getCurrentStep();
    beforeForward?.(currentStep);
    setCurrentStep(currentStep + 1);
  }
  
  useEffect(() => {
    setCurrentStep(step!);
  }, [step])

  const renderPopper = (wrapper: React.ReactNode) => {
    const config = getCurrentStep();
    if (!config) {
      return wrapper;
    }
    const { renderContent } = config;

    const content = renderContent ? renderContent(currentStep) : null;

    const operateion = (
      <div className="onboarding-opt">
        {
          currentStep !== 1 && <Button onClick={back} className='back'>上一步</Button>
        }
        <Button className="forward" onClick={forward}>{ currentStep === steps.length - 1 ? '我知道了' : '下一步' }</Button>
      </div>
    )

    return isMoving ? wrapper : <Popover
      content={<div>{content}{operateion}</div>}
      open={true}
      placement={config?.placement}
    >
      {wrapper}
    </Popover>
  }

  const [, setRenderTick] = useState<number>(0);

  useEffect(() => {
    setRenderTick(1)    
  }, []);
  
  if(!currentSelectedElement || done) {
    return null;
  }

  const mask = <Mask
    container={currentContainer}
    element={currentSelectedElement}
    renderMaskContent = { wrapper => renderPopper(wrapper) }
    onAnimationStart = {() => setIsMoving(true)}
    onAnimationEnd = {() => setIsMoving(false)}
  ></Mask>

  return createPortal(mask, currentContainer);
}