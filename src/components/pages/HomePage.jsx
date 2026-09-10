import IncidentForm from "../forms/IncidentForm";

export default function HomePage() {
  function submit(data) {
    console.dir(data);
  }
  return (
    <div>
      <h1 class="display-4">Add your Incident Here</h1>
      <br />
      <hr />
      <br />
      <IncidentForm submit={submit} />
    </div>
  );
}
