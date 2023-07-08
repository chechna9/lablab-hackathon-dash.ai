interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
    isObscure?: boolean;
}
const InputField = (props: InputFieldProps) => {
  return (
    <label className="flex flex-col space-y-2 ">
      <span className="text-[#BDBDBD]">{props.label}</span>
      <input
        {...props}
        type={`${props.isObscure ? "password" : "text"}`}
        className={"border-[2px] rounded-full border-[#BDBDBD] bg-[#FDFDFD] focus:outline-gray-500 transition-all py-3 px-2 "}
      />
    </label>
  );
};

export default InputField;
