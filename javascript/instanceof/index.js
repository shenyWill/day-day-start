function myInstanceof(obj, cls) {
  let proto = obj.__proto__;
  let targetPrototype = cls.prototype;
  while(proto) {
    if (proto === targetPrototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}