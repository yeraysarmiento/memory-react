import Form from "../../components/Form/Form";

function FormPage() {
  const onChange = (event) => {
    console.log(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <header>
        <h1 className="title">memory</h1>
      </header>
      <Form onSubmit={onSubmit} onChange={onChange} />
    </>
  );
}

export default FormPage;
