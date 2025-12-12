# Plataforma de Biblioteca Digital - Documentação

## Visão Geral

A **Plataforma de Biblioteca Digital** é uma aplicação web moderna para leitura e gerenciamento de livros online. Desenvolvida com React 19, Tailwind CSS 4, Express 4 e tRPC 11, oferece uma experiência de leitura intuitiva com recursos avançados de gerenciamento de biblioteca.

## Características Principais

### 📚 Biblioteca Digital
- **Listagem de Livros**: Visualize todos os livros disponíveis em um layout responsivo
- **Busca e Filtro**: Procure livros por título ou autor em tempo real
- **Informações do Livro**: Visualize detalhes como número de páginas e tipo de arquivo
- **Indicador de Favoritos**: Veja rapidamente quais livros estão marcados como favoritos

### 📖 Leitor Interativo
- **Visualizador de PDF**: Leia livros em formato PDF com renderização de alta qualidade
- **Controles de Navegação**: Botões para ir para a próxima/página anterior
- **Ajuste de Zoom**: Aumente ou diminua o tamanho da página (50% a 200%)
- **Barra de Progresso**: Navegue rapidamente para qualquer página do livro
- **Marcadores**: Marque páginas importantes para referência rápida
- **Interface Escura**: Design otimizado para leitura confortável

### ❤️ Sistema de Favoritos
- **Marcar Favoritos**: Adicione livros à sua lista de favoritos com um clique
- **Dashboard de Favoritos**: Veja todos os seus livros favoritos em um só lugar
- **Acesso Rápido**: Volte rapidamente aos seus livros preferidos

### 📊 Rastreamento de Progresso
- **Salvamento Automático**: O progresso de leitura é salvo automaticamente
- **Retomar Leitura**: Volte exatamente para onde parou
- **Porcentagem de Conclusão**: Veja o progresso em porcentagem
- **Histórico de Leitura**: Acesse o histórico de livros lidos

### 🔐 Painel Administrativo
- **Gerenciamento de Livros**: Adicione, edite e remova livros da biblioteca
- **Upload de Arquivos**: Envie novos livros em formato PDF ou EPUB
- **Edição de Metadados**: Atualize informações do livro após o upload
- **Controle de Acesso**: Apenas administradores podem gerenciar a biblioteca

### 👤 Gerenciamento de Usuário
- **Autenticação OAuth**: Login seguro via Manus OAuth
- **Dashboard Pessoal**: Veja suas informações e estatísticas
- **Histórico de Leitura**: Acesse seus livros favoritos e em progresso

## Estrutura de Páginas

### Página Inicial (`/`)
A página de boas-vindas apresenta a plataforma com um design atraente em azul celeste e branco. Contém:
- Descrição da plataforma
- Botão para explorar a biblioteca
- Recursos principais destacados
- Seção de features

### Biblioteca (`/library`)
Exibe todos os livros disponíveis com:
- Barra de busca para filtrar livros
- Grid responsivo de livros
- Informações de cada livro (título, autor, páginas)
- Botão "Ler Agora" para acessar o leitor

### Leitor (`/reader/:id`)
Interface de leitura com:
- Visualizador de PDF
- Controles de navegação e zoom
- Barra lateral com marcadores
- Informações do livro

### Dashboard (`/dashboard`)
Painel pessoal do usuário com:
- Informações da conta
- Lista de favoritos
- Estatísticas de leitura
- Ações rápidas

### Painel Administrativo (`/admin`)
Gerenciamento de biblioteca com:
- Lista de todos os livros
- Botões para editar/remover livros
- Acesso ao upload de novos livros

### Upload de Livro (`/admin/upload`)
Formulário para adicionar novos livros:
- Seleção de arquivo (drag & drop)
- Preenchimento de metadados
- Validação de arquivo
- Envio para S3

## Tecnologias Utilizadas

### Frontend
- **React 19**: Framework JavaScript moderno
- **Tailwind CSS 4**: Estilização utilitária
- **Lucide React**: Ícones elegantes
- **Wouter**: Roteamento leve
- **pdfjs-dist**: Renderização de PDFs
- **Sonner**: Notificações toast

### Backend
- **Express 4**: Servidor web
- **tRPC 11**: RPC type-safe
- **Drizzle ORM**: Gerenciamento de banco de dados
- **MySQL/TiDB**: Banco de dados
- **AWS S3**: Armazenamento de arquivos

### Banco de Dados

#### Tabela `users`
```sql
id (int) - Chave primária
openId (varchar) - Identificador OAuth
name (text) - Nome do usuário
email (varchar) - Email
loginMethod (varchar) - Método de login
role (enum) - admin ou user
createdAt (timestamp)
updatedAt (timestamp)
lastSignedIn (timestamp)
```

#### Tabela `books`
```sql
id (int) - Chave primária
title (varchar) - Título do livro
author (varchar) - Autor
description (text) - Descrição
coverUrl (varchar) - URL da capa
fileUrl (varchar) - URL do arquivo
fileType (varchar) - pdf ou epub
fileSize (int) - Tamanho em bytes
totalPages (int) - Total de páginas
createdAt (timestamp)
updatedAt (timestamp)
```

#### Tabela `readingProgress`
```sql
id (int) - Chave primária
userId (int) - Referência ao usuário
bookId (int) - Referência ao livro
currentPage (int) - Página atual
totalPages (int) - Total de páginas
percentageRead (int) - Porcentagem lida
lastReadAt (timestamp)
createdAt (timestamp)
updatedAt (timestamp)
```

#### Tabela `favorites`
```sql
id (int) - Chave primária
userId (int) - Referência ao usuário
bookId (int) - Referência ao livro
createdAt (timestamp)
```

#### Tabela `bookmarks`
```sql
id (int) - Chave primária
userId (int) - Referência ao usuário
bookId (int) - Referência ao livro
page (int) - Número da página
note (text) - Anotação opcional
createdAt (timestamp)
```

## Procedimentos tRPC

### Books Router
- `books.list` - Listar todos os livros
- `books.search` - Buscar livros por query
- `books.getById` - Obter livro por ID
- `books.create` - Criar novo livro (admin only)
- `books.update` - Atualizar livro (admin only)
- `books.delete` - Deletar livro (admin only)

### Reading Router
- `reading.getProgress` - Obter progresso de leitura
- `reading.updateProgress` - Atualizar progresso de leitura

### Favorites Router
- `favorites.list` - Listar favoritos do usuário
- `favorites.toggle` - Adicionar/remover favorito

### Bookmarks Router
- `bookmarks.list` - Listar marcadores de um livro
- `bookmarks.create` - Criar novo marcador
- `bookmarks.delete` - Deletar marcador

### Upload Router
- `upload.bookFile` - Upload de arquivo de livro (admin only)

## Design Visual

### Paleta de Cores
- **Azul Celeste**: `#0ea5e9` (sky-500)
- **Azul Escuro**: `#3b82f6` (blue-500)
- **Branco**: `#ffffff`
- **Cinza Claro**: `#f8fafc` (slate-50)
- **Cinza Escuro**: `#1f2937` (gray-800)

### Tipografia
- **Fonte Principal**: Sistema de fontes padrão
- **Tamanhos**: 
  - Títulos: 2xl a 4xl
  - Texto corpo: base
  - Pequeno: sm

### Componentes
- **Cards**: Bordas arredondadas, sombras suaves
- **Botões**: Gradientes azul celeste para ações principais
- **Inputs**: Bordas azuis, foco destacado
- **Ícones**: Lucide React para consistência

## Guia de Uso

### Para Usuários Comuns

1. **Acessar a Biblioteca**
   - Clique em "Explorar Biblioteca" na página inicial
   - Ou use o botão "Biblioteca" no header

2. **Buscar Livros**
   - Use a barra de busca para procurar por título ou autor
   - Os resultados aparecem em tempo real

3. **Ler um Livro**
   - Clique no botão "Ler Agora" em qualquer livro
   - Use os controles de navegação para virar páginas
   - Ajuste o zoom conforme necessário

4. **Marcar Favoritos**
   - Clique no ícone de coração durante a leitura
   - Veja todos os seus favoritos no dashboard

5. **Usar Marcadores**
   - Clique no ícone de marcador durante a leitura
   - Acesse os marcadores na barra lateral

### Para Administradores

1. **Acessar o Painel Admin**
   - Clique em "Painel Admin" no dashboard
   - Ou acesse `/admin` diretamente

2. **Adicionar Novo Livro**
   - Clique em "Upload de Livro"
   - Selecione o arquivo (PDF ou EPUB)
   - Preencha os metadados
   - Clique em "Adicionar Livro"

3. **Editar Livro**
   - Na lista de livros, clique no ícone de edição
   - Modifique as informações
   - Clique em "Atualizar"

4. **Remover Livro**
   - Na lista de livros, clique no ícone de lixeira
   - Confirme a exclusão

## Instalação e Configuração

### Pré-requisitos
- Node.js 22.13.0+
- pnpm 10.4.1+
- Banco de dados MySQL/TiDB

### Instalação

```bash
# Clonar repositório
git clone <repository-url>
cd leitor_online

# Instalar dependências
pnpm install

# Configurar banco de dados
pnpm db:push

# Iniciar servidor de desenvolvimento
pnpm dev
```

### Variáveis de Ambiente
As seguintes variáveis são injetadas automaticamente pelo sistema:
- `DATABASE_URL` - Conexão com banco de dados
- `JWT_SECRET` - Chave para sessões
- `VITE_APP_ID` - ID da aplicação OAuth
- `OAUTH_SERVER_URL` - URL do servidor OAuth
- `VITE_OAUTH_PORTAL_URL` - URL do portal OAuth

## Testes

Execute os testes unitários com:

```bash
pnpm test
```

Os testes cobrem:
- Autenticação e logout
- Operações CRUD de livros
- Atualização de progresso de leitura
- Gerenciamento de favoritos
- Criação de marcadores

## Performance e Otimizações

- **Lazy Loading**: Componentes carregados sob demanda
- **Caching**: Dados em cache para melhor performance
- **Otimização de Imagens**: Imagens redimensionadas automaticamente
- **Code Splitting**: Bundles otimizados com Vite
- **Compressão**: Gzip habilitado no servidor

## Segurança

- **Autenticação OAuth**: Login seguro via Manus
- **Autorização**: Controle de acesso baseado em roles
- **Proteção CSRF**: Tokens CSRF em formulários
- **Validação de Entrada**: Validação com Zod
- **HTTPS**: Comunicação criptografada

## Suporte e Contribuição

Para reportar bugs ou sugerir melhorias, abra uma issue no repositório.

## Licença

MIT License - Veja LICENSE.md para detalhes.

---

**Versão**: 1.0.0  
**Última Atualização**: Dezembro 2024
