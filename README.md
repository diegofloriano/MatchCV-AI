# 🎯 MatchCV AI — Otimizador de Currículos ATS & Matchmaker de Vagas com Vibe Coding

> Projeto prático desenvolvido para o desafio de projeto **"Construindo uma Aplicação de Match de Currículos com Vagas com IA"** da plataforma **Digital Innovation One (DIO)**.  
> Ferramenta de desenvolvimento guiado por IA: **[Lovable.dev](https://lovable.dev)**

---

## 🚀 Aplicação Publicada (Live Demo) & Repositório

A aplicação funcional, responsiva e com persistência de dados local está publicada e pronta para testes:

- 🔗 **Live Demo (Aplicação no Ar):** **[https://matchcv-dio.lovable.app](https://matchcv-dio.lovable.app)**
- 📦 **Repositório Oficial:** **[https://github.com/diegofloriano/matchcv-ai](https://github.com/diegofloriano/matchcv-ai)**

---

## ✨ O que é Vibe Coding & Engenharia de Prompt Iterativa?

**Vibe Coding** é uma abordagem moderna de engenharia de software orientada por intenção e impulsionada por Inteligência Artificial generativa. Em vez de iniciar pela configuração manual de *boilerplates* e folhas de estilo, o desenvolvedor atua como **Arquiteto de Software e Product Manager**: estrutura requisitos claros, define regras de negócio, estabelece o *Design System* e conduz ciclos iterativos de refatoração.

> *"Mais do que a primeira geração entregue pela IA, o valor de engenharia está em diagnosticar gargalos, refinar heurísticas e iterar até alcançar um produto sólido, ético e pronto para produção."*

Neste projeto, o fluxo de desenvolvimento seguiu quatro etapas fundamentais:
1. **Concepção do Mega Prompt (PRD):** Especificação completa da arquitetura de telas, paleta de cores e componentes `shadcn/ui`.
2. **Geração da Primeira Versão (V1):** Construção da estrutura base de 5 páginas no Lovable.
3. **Auditoria Técnica & Refatoração Iterativa (V2):** Identificação de limitações da V1 (como ausência de persistência, lista estática de palavras-chave e prefixos artificiais de texto) e aplicação de prompts cirúrgicos de engenharia para corrigi-las.
4. **Validação de Exportação & Deploy:** Testes reais de geração de documentos `.DOCX` e `.PDF` em formato *ATS-friendly* e publicação em ambiente de produção.

---

## 🎯 Conceito do Projeto & O Problema

### O Problema
Milhares de candidatos qualificados são eliminados de processos seletivos antes mesmo que uma pessoa do RH leia seus currículos. Isso ocorre porque plataformas de recrutamento utilizam sistemas **ATS (Applicant Tracking Systems)** — algoritmos que filtram e ranqueiam currículos com base na correspondência exata de palavras-chave da vaga, estruturação semântica e formatação limpa (sem colunas complexas, gráficos ou tabelas que quebram *parsers* de leitura).

### A Solução: MatchCV AI
O **MatchCV AI** atua como uma ponte estratégica entre a experiência real do candidato e os filtros automatizados de triagem. A plataforma compara o currículo base com o anúncio da vaga desejada, calcula a taxa de compatibilidade (**Score ATS de 0 a 100**), aponta exatamente quais competências já estão presentes ou ausentes e gera uma **versão otimizada e 100% legível para robôs de recrutamento**, pronta para download em **PDF**, **Word (.DOCX)** ou cópia direta para plataformas como Gupy, Workday e Greenhouse.

---

## ⚖️ Regra de Ouro & Compromisso Ético

Uma diretriz inegociável governa toda a arquitetura do **MatchCV AI**: **a aplicação melhora a forma como a pessoa se apresenta, mas jamais inventa experiências que o candidato não possui.**

- **Transparência na Interface:** O topo do *Estúdio ATS* exibe permanentemente um alerta visual de **Compromisso Ético**:
  > *"Compromisso Ético: O MatchCV AI otimiza a legibilidade e o ranqueamento das suas experiências reais para filtros ATS. O sistema não inventa nem adiciona qualificações que você não possui."*
- **Reordenação e Vocabulário Fiel:** O otimizador reorganiza *bullets* existentes por relevância para a vaga, aprimora verbos de ação iniciais e destaca competências já presentes no perfil, cabendo exclusivamente ao usuário clicar em uma palavra-chave ausente caso realmente domine aquela habilidade.

---

## ⚙️ Como a Análise Funciona (Da Vaga Colada ao Currículo Ajustado)

1. **Entrada da Vaga e do Currículo Base:** O usuário preenche ou cola seu currículo completo em texto puro na aba **Meu Perfil & CV** e seleciona (ou cola) a descrição de uma vaga no **Matchmaker de Vagas** ou diretamente no **Estúdio ATS**.
2. **Motor Dinâmico de Extração de Palavras-Chave:** Ao receber o anúncio da vaga, o algoritmo limpa *stopwords* (em português e inglês), identifica termos compostos (*n-grams* como `CI/CD`, `Design System`, `REST API`, `Tailwind CSS`, `Scrum Master`) e atribui pesos maiores para competências listadas sob seções críticas como *"Requisitos"*, *"Tecnologias"* e *"Diferenciais"*.
3. **Diagnóstico e Cálculo do Score ATS (0–100):** O sistema cruza o vocabulário exigido pela vaga com o currículo do candidato e exibe:
   - **Gauge Circular de Score ATS:** Nota de 0 a 100 calculada pela cobertura e densidade dos termos entre seções.
   - **Checklist ATS:** Validação de formato em coluna única sem tabelas/gráficos, proporção de palavras-chave encontradas, densidade de repetição semântica, presença de verbos de impacto e métricas quantificáveis.
   - **Mapeamento Visual de Keywords:** Separação clara entre **Keywords Críticas Encontradas** (badges em azul claro) e **Keywords Recomendadas Ausentes** (badges interativos em amarelo claro).
4. **Geração da Versão ATS-Friendly:** Ao acionar o botão **"Gerar Versão ATS"**, a aplicação:
   - Reescreve o **Resumo Profissional** conectando o cargo pretendido às principais competências da vaga que o candidato já domina;
   - Reordena os *bullets* de **Experiência Profissional** priorizando os mais aderentes à vaga e substitui aberturas fracas por verbos de ação fortes (*Colaborei*, *Elaborei*, *Melhorei*, *Desenvolvi*);
   - Move as **Habilidades** exigidas pela vaga para o topo da seção de competências.
5. **Comparação Antes/Depois e Exportação Multi-Formato:** O candidato alterna entre o currículo original e a versão otimizada (com grifo em amarelo nas palavras-chave aplicadas) e exporta o documento final em **.DOCX**, **.PDF** ou texto puro, além de vincular a versão exata gerada ao card da vaga no quadro Kanban de **Candidaturas**.

---

## 📸 Demonstração do Aplicativo e Casos de Uso Reais

### 1. Diagnóstico Inicial (Currículo Base — Score ATS: 52)
Análise inicial comparando o currículo base da candidata *Ana Souza* com a vaga de *Desenvolvedor(a) Front-end Sênior (Nuvem Pay)*. O sistema identificou **5 de 11 palavras-chave** (`React`, `TypeScript`, `Performance`, `Design System`, `Testes`), apontou **40%** de densidade de termos repetidos em mais de uma seção, **5/7** verbos de impacto e listou as competências ausentes (`Next.js`, `Acessibilidade`, `GraphQL`, `CI/CD`, `Tailwind CSS`, `Cypress`):

![Diagnóstico Inicial - Score ATS 52](COLE_AQUI_O_LINK_DA_IMAGEM_1)

---

### 2. Otimização em Ação (Depois da Versão ATS — Score ATS: 63)
Ao clicar em **"Gerar Versão ATS"**, o currículo foi reestruturado mantendo apenas qualificações verdadeiras da candidata. O **Score ATS subiu de 52 para 63 (+11 pontos)**, a densidade de termos em múltiplas seções atingiu **100%** e os verbos de impacto nos *bullets* subiram para **7/7**, destacando visualmente em amarelo cada palavra-chave alinhada à vaga:

![Currículo Otimizado - Score ATS 63](COLE_AQUI_O_LINK_DA_IMAGEM_2)

---

### 3. Resultado da Exportação em `.DOCX` e `.PDF` (Coluna Única ATS-Friendly)
O arquivo `curriculo-ana-souza.docx` gerado pelo botão **Baixar DOCX** entrega uma formatação limpa em página A4 de coluna única, títulos estruturados, listas com marcadores padronizados e vocabulário otimizado sem qualquer elemento visual que bloqueie leitores de RH:

> **Ana Souza — Desenvolvedora Front-end**  
> `ana.souza@email.com | (11) 98888-1234 | São Paulo, SP | linkedin.com/in/anasouza`  
>  
> **RESUMO PROFISSIONAL**  
> Desenvolvedora Front-end com experiência em React, TypeScript e Performance. Experiência com bibliotecas modernas e trabalho em times ágeis. Também atua com Design System e Testes.  
>  
> **EXPERIÊNCIA PROFISSIONAL**  
> **Desenvolvedora Front-end Pleno — Fintech Lumen (2022 – Atual)**  
> • Desenvolvi telas do app web de investimentos usando React e TypeScript  
> • Colaborei na criação do design system interno com Storybook  
> • Melhorei a performance do carregamento inicial em 40%  
> • Elaborei testes unitários com Jest  
>  
> **HABILIDADES**  
> React, TypeScript, Performance, Design System, Testes, JavaScript, CSS, HTML, Jest, Figma, Git, Storybook, REST

---

## 📄 Mega Prompt Inicial (PRD Utilizado no Lovable)

Abaixo está o Mega Prompt estruturado utilizado para gerar a primeira versão da arquitetura do aplicativo no Lovable:

<pre>
# Role & Project Overview
Atue como um Engenheiro Front-end Sênior e Especialista em UX/UI. Crie uma aplicação web completa, moderna e responsiva no Lovable chamada "MatchCV AI" — uma plataforma de matchmaking de vagas de emprego combinada com um gerador e otimizador de currículos 100% adaptados para sistemas ATS (Applicant Tracking Systems).

## 1. Identidade Visual & Design System
- Design System: shadcn/ui completo (Tailwind CSS, Lucide Icons, Radix UI primitives).
- Estilo Geral: Clean, moderno, profissional, acessível e minimalista, priorizando legibilidade tipográfica para formatação de currículos.
- Paleta de Cores:
  - Fundo / Base: Branco puro (#FFFFFF) com neutros frios sutis para cartões e divisórias (#F8FAFC, #F1F5F9).
  - Primária (Azul Claro): Tons suaves e confiáveis como Sky/Baby Blue (#38BDF8, #0EA5E9 para ações interativas e botões primários, com #E0F2FE para fundos sutis).
  - Acento (Amarelo Claro / Manteiga): Tons pastéis (#FEF08A, #FDE047 com fundo #FEF9C3) usados para badges de destaque, percentual de compatibilidade ATS, alertas de palavras-chave faltantes e tags de match alto.
  - Tipografia & Textos: Títulos e textos em Ardósia escuro (#0F172A e #334155) para contraste impecável.

## 2. Estrutura de Navegação & Telas
1. Dashboard: Métricas rápidas (taxa média de match ATS, candidaturas ativas, vagas salvas e currículos gerados), feed de vagas recomendadas e atalho rápido.
2. Meu Perfil & Currículo Base (Master Resume): Formulário em abas para dados pessoais, resumo, experiências, formação, habilidades e certificações, além de opção para colar texto bruto e indicador de completude do perfil.
3. Matchmaker de Vagas: Campo para colar descrição de vaga externa, filtros por senioridade/regime/área e card detalhando requisitos e Score de Afinidade.
4. Estúdio ATS & Otimizador: Visualização Split View (descrição da vaga com keywords destacadas vs. editor de currículo adaptado), Score ATS (0 a 100) com checklist e botões de exportação limpa.
5. Rastreador de Candidaturas (Kanban / Lista): Colunas (Salva, Currículo Gerado, Aplicado, Entrevista, Finalizado) vinculando a vaga à versão exata do currículo ATS.
</pre>

---

## 🛠️ Ajustes Pós-Primeira Geração (Evolução Técnica V1 ➔ V2)

Após inspecionar a primeira versão gerada pelo Lovable, identifiquei limitações funcionais e de experiência do usuário. Através de prompts iterativos de engenharia, foram implementadas **5 refatorações estruturais** até a versão final:

1. **Persistência de Dados Offline-First (`localStorage`):**
   - *Problema na V1:* Recarregar a página apagava todas as edições de perfil, vagas coladas e movimentações de cards no Kanban.
   - *Solução na V2:* Criação de camada de sincronização automática no navegador com indicador visual `"Salvo"`, botão `"Ver currículo enviado"` em cada card de candidatura e opção `"Resetar para dados de demonstração"` nas configurações de perfil.
2. **Motor Dinâmico de Extração de Palavras-Chave (Fim da Lista Estática):**
   - *Problema na V1:* O algoritmo inicial verificava apenas uma lista fixa de cerca de 30 habilidades comuns, ignorando outros requisitos de vagas coladas.
   - *Solução na V2:* Implementação de um extrator heurístico dinâmico que analisa qualquer anúncio de vaga, reconhece termos compostos (*n-grams*) e atribui maior peso às seções de requisitos e tecnologias.
3. **Polimento Gramatical da Reescrita ATS (Remoção do Prefixo `"Atuei:"`):**
   - *Problema na V1:* Frases de experiência que não iniciavam com verbo de ação recebiam o prefixo forçado `"Atuei:"` na frente, soando artificial e robótico.
   - *Solução na V2:* Substituição contextual de aberturas fracas por verbos de ação fortes em português (ex.: *"Participei da criação"* ➔ *"Colaborei na criação"*; *"Escrevi"* ➔ *"Elaborei"*), mantendo intactas as frases que já possuem boa estrutura e reordenando os itens por relevância.
4. **Identidade Visual Autoral & Alerta de Compromisso Ético:**
   - *Porquê:* Fortalecer o *branding* formal da aplicação e deixar explícita para o usuário a regra ética do desafio da DIO.
   - *Solução na V2:* Criação de um logotipo SVG vetorial (combinando documento e alvo nas cores azul claro e amarelo suave) no Header e na Sidebar, além da adição do componente `Alert` de **Compromisso Ético** no topo do Estúdio ATS.
5. **Exportação Dupla Client-Side (`.DOCX` e `.PDF`):**
   - *Porquê:* Permitir tanto o envio imediato em PDF quanto a edição posterior pelo candidato no Microsoft Word ou Google Docs.
   - *Solução na V2:* Implementação do botão **Baixar DOCX** (gerando arquivo Word A4 em coluna única com títulos em negrito e listas de *bullets*) ao lado do **Baixar PDF** (com regras `@media print` que ocultam menus laterais, botões e cartões de diagnóstico durante a impressão/salvamento).

---

## 💡 Reflexão sobre o Processo de Vibe Coding

### O que funcionou muito bem?
- **Arquitetura Visual de Primeira (shadcn/ui):** Definir explicitamente os códigos hexadecimais da paleta (Azul Claro `#0EA5E9`, Branco `#FFFFFF` e Amarelo Suave `#FEF08A`) e os primitivos do `shadcn/ui` no Mega Prompt permitiu gerar uma interface limpa, legível e com excelente hierarquia visual logo na primeira iteração.
- **Visualização Lado a Lado (Split View):** Colocar o anúncio da vaga com palavras-chave grifadas à esquerda e o currículo interativo à direita tornou a conferência do match imediata e intuitiva.

### Desafios e Ajustes
- **Refinamento da Lógica de Texto:** A primeira tentativa da IA para reescrever *bullets* de currículo usou um atalho mecânico (`"Atuei:"`). Diagnosticar esse comportamento e instruir regras gramaticais naturais elevou drasticamente a qualidade do texto final exportado.
- **Isolamento da Folha de Impressão:** Garantir que a exportação em PDF contivesse exclusivamente o currículo exigiu calibrar as classes utilitárias de `@media print` para ocultar barras de navegação, cabeçalhos e painéis de métricas.

### O que aprendi sobre construir produtos com IA?
1. **Auditoria Crítica é Indispensável:** A IA entrega velocidade de construção, mas o olhar crítico do desenvolvedor para testar casos de borda, ler o documento exportado e corrigir heurísticas frágeis é o que separa um protótipo raso de um produto confiável.
2. **Prompts Modulares para Refatoração:** Enquanto o Mega Prompt é excelente para erguer o esqueleto completo da aplicação, ajustes finos de regra de negócio e exportação de arquivos funcionam muito melhor quando divididos em prompts focados e incrementais.

---

## 🛠️ Tecnologias Utilizadas & Estrutura do Repositório

- **Plataforma de Desenvolvimento & Deploy:** [Lovable.dev](https://lovable.dev)
- **Framework & Linguagem:** React 18 com TypeScript e Vite
- **Estilização & Design System:** Tailwind CSS + shadcn/ui (Radix UI)
- **Ícones:** Lucide React
- **Manipulação e Exportação de Documentos:** Geração client-side de arquivos `.docx` e estilização nativa `@media print` para `.pdf`

### Estrutura de Pastas do Projeto
- `src/components`: Componentes reutilizáveis da interface, estrutura de layout (Sidebar, Header, Logotipo SVG) e primitivos do `shadcn/ui`.
- `src/pages`: Telas principais da aplicação (*Dashboard*, *Meu Perfil & CV*, *Matchmaker de Vagas*, *Estúdio ATS* e *Candidaturas*).
- `src/lib` e `src/data`: Motor heurístico de extração de palavras-chave, cálculo do Score ATS, regras de reescrita, funções de exportação (`.docx` / `.pdf`), persistência em `localStorage` e dados iniciais de demonstração.
- `public`: Ativos estáticos e metadados da aplicação.

---

## 👤 Autor e Créditos

Projeto concebido, arquitetado e refinado por **Diego Floriano Costa** como entrega prática para o desafio de projeto da **Digital Innovation One (DIO)**.

- 💼 **GitHub:** [@diegofloriano](https://github.com/diegofloriano)
- 🌐 **Live App:** [https://matchcv-dio.lovable.app](https://matchcv-dio.lovable.app)
