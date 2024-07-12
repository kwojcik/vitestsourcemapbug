function Foo() {
  return <>hi</>;
}
export default function Bar() {
  throw new Error("oops");

  return <Foo />;
}
