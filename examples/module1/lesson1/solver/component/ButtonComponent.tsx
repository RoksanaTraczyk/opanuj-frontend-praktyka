export default function ButtonComponent(props: any) {

  return (
      <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={props.onClick}>
          {props.buttonName}
        </button>
  );
};