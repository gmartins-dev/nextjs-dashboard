
interface AuthInputProps {
  label: string
  value: any
  type?: string
  required?: boolean
  newValue: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps){

  return (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input 
      type={props.type ?? 'text'}
      value={props.value}
      required={props.required}
      onChange={event => props.newValue?.(event.target.value)}
      className="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white"
      />
    </div>
  )
}