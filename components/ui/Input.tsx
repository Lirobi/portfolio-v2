interface InputProps {
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  name?: string;
  required?: boolean;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  name,
  required = false,
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-5 py-4 bg-foreground/5 border-2 border-transparent rounded-xl focus:border-coral focus:bg-background focus:outline-none transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}
