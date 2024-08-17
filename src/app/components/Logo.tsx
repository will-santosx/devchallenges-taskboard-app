import Image from 'next/image'
import Logo from '@/app/assets/Logo.svg'

export default function AppLogo() {
    return (
        <div className="flex items-center space-x-3">
            <Image alt="Logo da Aplicação" src={Logo} />
            <h2 className="text-title">Quadro de Tarefas</h2>
        </div>
    )
}
