import React from "react";
import "./Styles.scss";
import imgNeymarSelec from "../../assets/imagens/neymarSelecao.png";
import imgMessi from "../../assets/imagens/messi.png";
import imgRonaldo from "../../assets/imagens/ronaldo.png";
import adminIcon from "../../assets/imagens/admin.png";
import coracaoIcon from "../../assets/imagens/coracao.png";
import carrinhoIcon from "../../assets/imagens/carrinho.png";
import imgLupa from "../../assets/imagens/lupa.png";
import imgCamisa from "../../assets/imagens/camisaBrasil.png";
import imgVisa from "../../assets/imagens/visa.png";
import imgMasterCard from "../../assets/imagens/mastercard.png";
import imgBoleto from "../../assets/imagens/boleto.png";
import imgFacebook from "../../assets/imagens/facebook.png";
import imgInstagram from "../../assets/imagens/instagram.png";
import imgWhatsapp from "../../assets/imagens/whatsapp.png";
import imgElo from "../../assets/imagens/elo.png";

import { Link } from "react-router-dom";



export const Admin = () => {
    return (
        <body>
            <div className="divPrinc">

                <h1 className="goalStore">Goal Store</h1>

                <input
                    className="pesquisa"
                    placeholder="Pesquisar Camisas..."
                />
                <img src={imgLupa} className="imgLupa" />

                <Link to='/estoque'> <img className="adminIcon" src={adminIcon} /></Link>
                <img className="coracaoIcon" src={coracaoIcon} />
                <img className="carrinhoIcon" src={carrinhoIcon} />

            </div>

            <div className="imagensFundo">

                <div className="ronaldo">

                    <h1>Camisetas de antiga e nova geração</h1>
                    <img className="imgRonaldo" src={imgRonaldo} />
                    <img className="imgNeymarSelec" src={imgNeymarSelec} />
                    <img className="imgMessi" src={imgMessi} />

                </div>
            </div>


            <div className="maisVendidas">
                <h1>MAIS VENDIDAS</h1>

                <div className="camisas">
                    <section>
                        <img className="imgCamisa" src={imgCamisa} />

                        <p>CAMISA SELEÇÃO BRASILEIRA</p>
                        <p>R$ 999,99</p>
                        <p>R$ 799,99</p>
                    </section>

                    <section>
                        <img className="imgCamisa" src={imgCamisa} />

                        <p>CAMISA SELEÇÃO BRASILEIRA</p>
                        <p>R$ 999,99</p>
                        <p>R$ 799,99</p>

                    </section>

                    <section>
                        <img className="imgCamisa" src={imgCamisa} />

                        <p>CAMISA SELEÇÃO BRASILEIRA</p>
                        <p>R$ 999,99</p>
                        <p>R$ 799,99</p>

                    </section>

            
                </div>

                <div className="botoes">
                    <button className="emPromocao" >EM PROMOÇÃO</button>
                    <button className="lancamentos" >LANÇAMENTOS</button>
                    <button className="clubes" >CLUBES</button>
                    <button className="selecoes" >SELEÇÕES</button>
                </div>
            </div>

            <div className="rodape">
                <h1>GoalStore.com.br</h1>

                <h2>FORMAS DE PAGAMENTO</h2>
                <h2>SIGA-NOS:</h2>

                <img className="imgVisa" src={imgVisa} />
                <img className="imgMasterCard" src={imgMasterCard} />
                <img className="imgElo" src={imgElo} />
                <img className="imgBoleto" src={imgBoleto} />
                <img className="imgFacebook" src={imgFacebook} />
                <img className="imgInstagram" src={imgInstagram} />
                <img className="imgWhatsapp" src={imgWhatsapp} />


            </div>
        </body>
    );
}
