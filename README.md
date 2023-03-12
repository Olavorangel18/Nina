# Nina Challenge

Quando eu estava realizando o desafio técnico para o processo seletivo, meu primeiro passo foi entender qual o problema que era necessário ser resolvido e quais as ferramentas eu iria precisar para chegar ao fim do processo, com todos os requisitos cumpridos e no tempo proposto.

Foi nos dado um banco de dados fake, e a partir dele comecei a estudar o seu conteúdo para entender quais as informações que precisaria ser mostradas e a melhor forma de fazer isso.

Por conta disso, ao entender que estavamos falando sobre "Complaint", pesquisei na internet implementações de aplicações web que comportam essas soluções, e me baseei nelas para ter um norte de como prosseguir com o desenvolvimento.

Depois dessa etapa de pesquisa, fiz um prototipo rápido no figma para ilustrar algumas das ideias e pensar em um design que seria fácil de implementar no tempo proposto.

Quando essa parte de concepção foi finalizada, partimos para o desáfio de código. De forma geral, as coisas andaram bem, tive algum problema para conseguir fazer o mapeamento de estados de alguns componentes e a conexão de informação entre eles. Porém, com a biblioteca de RxJS consegui resolver todas essas adversidades.

Segui uma arquitetura de componentização, em que teriamos uma pagina a "Complaint Page", que receberia cada um desses componentes a fim de no final juntar tudo e materializar nossa solução. Além disso, foi criado model e serviços para evitar a poluição de código e facilitar o processo de desenvolvimento.


