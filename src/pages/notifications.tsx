import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";
export default function Notifications(){

  const {switchTheme} = useAppData()

  return (
    <Layout title="Notifications" subtitle="Define your notifications configs">
      <h3>NTOFICACOESSSS</h3>
      <button onClick={switchTheme}>Alterar theme</button>
    </Layout>
  )
}