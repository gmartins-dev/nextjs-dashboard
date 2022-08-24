
interface AuthInputProps {
  label: string
  value: any
  type?: string
  required?: boolean
  newValue: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps){

  return (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <input 
      type={props.type ?? 'text'}
      value={props.value}
      required={props.required}
      onChange={event => props.newValue?.(event.target.value)}
      />
    </div>
  )
}