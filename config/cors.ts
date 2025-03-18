export default {
  /*
  |--------------------------------------------------------------------------
  | Origin
  |--------------------------------------------------------------------------
  |
  | Configure as origens permitidas para as requisições CORS. 
  | '*' permite todas as origens ou defina algumas específicas.
  |
  */
  origin: ['http://localhost:3000', 'http://localhost:5173'],

  /*
  |--------------------------------------------------------------------------
  | Methods
  |--------------------------------------------------------------------------
  |
  | Métodos HTTP permitidos para requisições CORS
  |
  */
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'],

  /*
  |--------------------------------------------------------------------------
  | Headers
  |--------------------------------------------------------------------------
  |
  | Defina quais cabeçalhos são permitidos.
  |
  */
  headers: true,

  /*
  |--------------------------------------------------------------------------
  | Expôr cabeçalhos
  |--------------------------------------------------------------------------
  |
  | Define quais cabeçalhos podem ser expostos nas respostas
  |
  */
  exposeHeaders: [
    'cache-control',
    'content-language',
    'content-type',
    'expires',
    'last-modified',
    'pragma',
  ],

  /*
  |--------------------------------------------------------------------------
  | Credentials
  |--------------------------------------------------------------------------
  |
  | Define se as requisições podem incluir credenciais como cookies
  |
  */
  credentials: true,

  /*
  |--------------------------------------------------------------------------
  | MaxAge
  |--------------------------------------------------------------------------
  |
  | Define por quanto tempo o navegador deve armazenar em cache os resultados
  | de uma requisição preflight
  |
  */
  maxAge: 90,
} 