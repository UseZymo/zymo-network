type Props = {
  name: string;
};

export default function AssistantCard({
  name
}: Props) {

  return (

    <div>

      <h2>{name}</h2>

      <p>Personal AI Assistant</p>

    </div>

  );

}
