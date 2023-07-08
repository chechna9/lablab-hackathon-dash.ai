interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
}
const InputField = (props: InputFieldProps) => {
  return (
    <label className="flex flex-col space-y-2 text-[#BDBDBD]">
      <span>{props.label}</span>
      <input
        {...props}
        type="text"
        className="border-[2px] rounded-full border-[#BDBDBD] bg-[#FDFDFD] focus:outline-gray-500 transition-all py-3 px-2"
      />
    </label>
  );
};

export default InputField;
