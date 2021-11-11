import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Informacao from './Informacao';
import Imc from './Imc';

export default function Content() {
    return (
        <View style={styles.container}>
            <ScrollView >
                
                <Informacao titulo='Falso magro: o que é, causas e o que fazer?'
                    conteudo='Geralmente, o perfil do falso magro têm como característica pouca massa muscular, ombros finos, braços finos e a relação ombro-cintura muito desproporcional.  
            
                Esta gordura é considerada pelo corpo uma energia de reserva, portanto quanto mais calorias consumimos, mais gordura estocamos. O organismo é programado para armazenar energia nas células de gordura e este acúmulo delas gera o aumento de volume. O resultado final é a gordura localizada em locais específicos do corpo.'
                    autor='Escrito por Nathan Cândido'
                />
                <Informacao titulo='Vitaminas para cabelo: como saber quais tomar?' conteudo='As vitaminas são essenciais para a boa manutenção e funcionamento do corpo, além de atuarem no processo de absorção de outros nutrientes, também indispensáveis ao organismo. Como o nosso corpo não produz vitaminas, elas devem compor a nossa dieta alimentar.

                As principais fontes de vitaminas são frutas, verduras e legumes, porém, podem ainda ser encontradas na carne, nos ovos, no leite e nos cereais. Todas as pessoas têm benefícios ao ingerir alimentos ricos em vitaminas, divididas em hidrossolúveis (solúveis em água) ou lipossolúveis (em gordura).

                No entanto, é importante destacar que a reposição através de complexos vitamínicos só deve ser feita em caso de carências orgânicas e nunca por automedicação, já que o organismo deve funcionar em equilíbrio, evitando sempre os excessos.' autor='Escrito por Joana Darc Diniz' />
                <Informacao titulo='IMC: o que é, tabela e como calcular' conteudo='O IMC (Índice de Massa Corporal) é uma ferramenta usada para detectar casos de obesidade ou desnutrição, principalmente em estudos que envolvem grandes populações.

                De acordo com o endocrinologista Mario Kedhi Carra, membro da Associação Brasileira para o Estudo da Obesidade e da Síndrome Metabólica (ABESO), essa é uma medida universal de classificação de obesidade, validada pela Organização Mundial da Saúde.

                É possível encontrar o resultado do índice fazendo uma conta que envolve a relação do peso de uma pessoa em quilos com a sua altura ao quadrado.
                Para a avaliação de um paciente individualmente, no entanto, ele pode ser falho por não levar em conta a composição desse peso corporal, que pode ser composto por gordura, músculos, água e estruturas ósseas.
                Como calcular IMC.
                Fórmula do IMC = Peso/Altura²' autor='Escrito por Redação Minha Vida'/>
                <Imc />
                <Informacao titulo='Diabetes e álcool: qual a relação? Números crescem na pandemia da COVID' conteudo='O consumo de bebida alcoólica em diversas partes do mundo aumentou durante a pandemia - e vinha crescendo mesmo antes dela. Vários estudos, entre eles uma pesquisa publicada pela Organização Pan-Americana da Saúde, revelam que a bebida é usada, sobretudo, para aliviar o estresse do dia a dia.
                Apesar das recomendações em relação à dieta e ao estilo de vida, os diabéticos também beberam mais nesse período. O tema foi um dos pontos discutidos no 4º Workshop de Mídia da ADJ Diabetes Brasil. Especialistas explicam o que pode acontecer com excessos e sugerem estratégias para esses grupos no caso de ingestão de álcool.
                
                "Eu costumava beber duas ou três taças de vinho por semana. No isolamento, de uma taça, quase todos os dias, aumentava para duas ou três." Pode ser que muita gente se identifique com o relato de Bianca Fiori, 44 anos, jornalista.
            
                Diagnosticada com diabetes tipo 1 há 27 anos, ela considera ter certo controle da doença. Mesmo assim, passou a sentir muito desconforto quando bebia mais do que o de costume. Essa reação, somada ao quadro de doença celíaca, funcionou como alerta. Bianca conta que depois de dois meses bebendo a mais, decidiu cortar o álcool por um mês. Agora, toma, no máximo, uma cerveja no fim de semana, sempre acompanhada de comida, para não deixar a barriga vazia e passar mal.
            
                A doutora em endocrinologia Karla Melo é autora do estudo que aponta o aumento de registros de consumo de álcool, feitos por diabéticos no aplicativo Glic, usado para controle de glicemia. A análise do ano de 2019 em relação a 2020, a partir de março, mostrou aumento de 1,84 vezes. O padrão do binge drinking - beber quatro doses e meia ou mais em duas horas, para mulheres, e cinco doses e meia ou mais no mesmo intervalo para homens - também cresceu.' autor='Giovanna Fischborn - Correio Braziliense' />
                <Informacao titulo='O que é Diabetes?' conteudo='Diabetes Mellitus é uma doença caracterizada pela elevação da glicose no sangue (hiperglicemia). Pode ocorrer devido a defeitos na secreção ou na ação do hormônio insulina, que é produzido no pâncreas, pelas chamadas células beta . A função principal da insulina é promover a entrada de glicose para as células do organismo de forma que ela possa ser aproveitada para as diversas atividades celulares. A falta da insulina ou um defeito na sua ação resulta portanto em acúmulo de glicose no sangue, o que chamamos de hiperglicemia.

                Classificação do Diabetes

                Sabemos hoje que diversas condições que podem levar ao diabetes, porém a grande maioria dos casos está dividida em dois grupos: Diabetes Tipo 1 e Diabetes Tipo 2.>

                Diabetes Tipo 1 (DM 1) – Essa forma de diabetes é resultado da destruição das células beta pancreáticas por um processo imunológico, ou seja, pela formação de anticorpos pelo próprio organismo contra as células, beta levando a deficiência de insulina. Nesse caso podemos detectar em exames de sangue a presença desses anticorpos que são: ICA, IAAs, GAD e IA-2. Eles estão presentes em cerca de 85 a 90% dos casos de DM 1 no momento do diagnóstico. Em geral costuma acometer crianças e adultos jovens, mas pode ser desencadeado em qualquer faixa etária.

                O quadro clínico mais característico é de um início relativamente rápido (alguns dias até poucos meses) de sintomas como: sede, diurese e fome excessivas, emagrecimento importante, cansaço e fraqueza. Se o tratamento não for realizado rapidamente, os sintomas podem evoluir para desidratação severa, sonolência, vômitos, dificuldades respiratórias e coma. Esse quadro mais grave é conhecido como Cetoacidose Diabética e necessita de internação para tratamento.

                Diabetes Tipo 2 (DM 2) – Nesta forma de diabetes está incluída a grande maioria dos casos (cerca de 90% dos pacientes diabéticos). Nesses pacientes, a insulina é produzida pelas células beta pancreáticas, porém, sua ação está dificultada, caracterizando um quadro de resistência insulínica. Isso vai levar a um aumento da produção de insulina para tentar manter a glicose em níveis normais. Quando isso não é mais possível, surge o diabetes. A instalação do quadro é mais lenta e os sintomas – sede, aumento da diurese, dores nas pernas, alterações visuais e outros – podem demorar vários anos até se apresentarem. Se não reconhecido e tratado a tempo, também pode evoluir para um quadro grave de desidratação e coma .

                Ao contrário do Diabetes Tipo 1, há geralmente associação com aumento de peso e obesidade, acometendo principalmente adultos a partir dos 50 anos. Contudo, observa-se, cada vez mais, o desenvolvimento do quadro em adultos jovens e até crianças. Isso se deve, principalmente, pelo aumento do consumo de gorduras e carboidratos aliados à falta de atividade física. Assim, o endocrinologista tem, mais do que qualquer outro especialista, a chance de diagnosticar o diabetes em sua fase inicial, haja visto a grande quantidade de pacientes que procuram este profissional por problemas de obesidade.' autor='Sociedade Brasileira de Endocrinologia e Metabologia' />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:4,
    },

    text: {
        fontSize: 20,
        fontWeight: "bold"

    },
});
