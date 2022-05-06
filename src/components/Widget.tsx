import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  //Função que alternar a visibilidade do widget. Toda vez que ela for chamada eu quero alterar o valor do isWidgetOpen para o valor contrário dele!
  //Ou seja ele vai pegar o valor atual, se o widget tá aberto ou não e vai setar o valor contrário a ele
  function toggleWidgetVisible() {
    setIsWidgetOpen(!isWidgetOpen);
  }
  return (
    <div className="absolute bottom-5 right-5">
      {isWidgetOpen ? <p>Hello World</p> : null}
      <button
        onClick={toggleWidgetVisible}
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6 " />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </button>
    </div>
  );
}
//O overflow-hidden qualquer conteúdo de uma div ou elemento que sobreponha o tamanho máximo da
//quele elemento vai ficar invísivel.

//group-hover - Quando o usuário estiver dando hover em qualquer elemento
// do grupo, ou seja no caso, qualquer coisa que esteja dentro do botão, acontece uma ação
//no Caso eu aumento a largura dele/botão.

//xs é largura máxima, por que não posso usar auto.
