export default function InputComponent(props: any) {

  return (
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={props.value}
          onChange={props.onChange}
        />
  );
};
