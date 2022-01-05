import Form from "../../components/Form/Form";
import "./FormPage.scss";

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
        <h1 className="title title--form">memory</h1>
      </header>
      <Form onSubmit={onSubmit} onChange={onChange} />
    </>
  );
}

export default FormPage;
