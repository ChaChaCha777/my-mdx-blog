import H1 from "./components/h1"

const components = {}
 
export function useMDXComponents() {
  return {
    h1: (props) => <H1 {...props} />,
    ...components,
  }
}