import "./Footer.css"

function Footer (){
    return (
        <div className={"footer-main"} id={"footer"}>
            <div className={"footer-header"}>
                <span> Projeto A3 </span>
            </div>
            <div className={"footer-content"}>
                <div className={"footer-content-left"}>
                    <div className={"footer-content-left-students"}>
                        <div className={"footer-students"}>
                            <span> Alexandre </span>
                            <p> RA: 12522181874</p>
                        </div>
                        <div className={"footer-students"}>
                            <span> Thiago </span>
                            <p> RA: 12522224744</p>
                        </div>

                        <div className={"footer-students"}>
                            <span> Roberta</span>
                            <p> RA:125111345409</p>
                        </div>
                        <div className={"footer-students"}>
                            <span> Gabriel Caravalho </span>
                            <p> RA: 125111364427</p>
                        </div>
                        <div className={"footer-students"}>
                            <span> Gabriel </span>
                            <p> RA: 125111364427</p>
                        </div>
                        <div className={"footer-students"}>
                            <span> Isabelle </span>
                            <p> RA: 125111376370</p>
                        </div>
                    </div>

                </div>
                <div className={"footer-content-right"}>

                </div>
            </div>
            <div className={"footer-copyright"}>
                <p> © 2024 Projecta3. Todos os direitos reservados.</p>
                <p> É proibida a reprodução, distribuição ou uso não autorizado de qualquer
                    conteúdo deste website sem permissão prévia.</p>
            </div>
        </div>
    )
}

export default Footer