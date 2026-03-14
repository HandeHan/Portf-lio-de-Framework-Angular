# Portf-lio-de-Framework-Angular

Este repositório contém o desenvolvimento de um aplicativo web de gerenciamento de tarefas criado com Angular. O projeto permite que os usuários criem, excluam e marquem tarefas como concluídas, oferecendo uma interface simples e organizada para gerenciamento de atividades.

# Gerenciador de Tarefas Angular

Este projeto consiste no desenvolvimento de um aplicativo web de gerenciamento de tarefas utilizando o framework Angular.

## Funcionalidades

- Criar tarefas
- Marcar tarefas como concluídas
- Excluir tarefas

## Estrutura do Projeto

O projeto foi organizado da seguinte forma:

- **components**: contém os componentes da aplicação
- **tasks**: componente responsável pelo gerenciamento de tarefas
- **app.component**: componente raiz da aplicação
- **app.module**: módulo principal do Angular

## Tecnologias Utilizadas

- Angular
- TypeScript
- HTML
- CSS

```node

task-manager
│
├── package.json
├── README.md
├── .gitignore
│
└── src
    │
    ├── index.html
    ├── main.ts
    ├── styles.css
    │
    └── app
        │
        ├── app.module.ts
        ├── app.component.ts
        ├── app.component.html
        ├── app.component.css
        │
        └── components
            └── tasks
                ├── tasks.component.ts
                ├── tasks.component.html
                └── tasks.component.css

```

Para desenvolver o aplicativo de gerenciamento de tarefas, o projeto Angular foi organizado em uma estrutura modular dentro da pasta app. Foi criado um componente chamado tasks, responsável pela interface e pelas funcionalidades do sistema.

Dentro desse componente estão os arquivos tasks.component.ts, que contém a lógica da aplicação, tasks.component.html, responsável pela estrutura da interface, e tasks.component.css, utilizado para estilização.

O componente é importado no app.component.html, permitindo que ele seja exibido na aplicação principal.

Essa organização facilita a manutenção do código e permite que o projeto seja escalável, seguindo boas práticas do desenvolvimento com Angular.

# Conclusão

O desenvolvimento deste projeto permitiu aplicar conceitos de desenvolvimento web utilizando o Angular, compreendendo melhor a organização de componentes, arquivos e diretórios dentro da estrutura do framework. A atividade contribuiu para fortalecer o entendimento sobre a criação de interfaces interativas e a lógica básica de gerenciamento de tarefas em aplicações web.


