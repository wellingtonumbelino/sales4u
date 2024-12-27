export function lazyLoad(componentName) {
  return () => import(`@views/${componentName}.vue`);
}
