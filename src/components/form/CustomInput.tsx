import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};

const CustomInput = ({ type, name, label, placeholder }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState }) => (
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">{label}</span>
            </div>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              //   className={`input input-bordered w-full`}
              className={`input input-bordered w-full ${
                fieldState.error ? "border-red-500" : ""
              }`}
            />
            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">
                {fieldState?.error?.message}
              </p>
            )}
          </label>
        )}
      />
    </div>
  );
};

export default CustomInput;
{
  /* <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              disabled={disabled}
            />
          </Form.Item> */
}
