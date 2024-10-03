import { Controller, Get } from '@nestjs/common';
import { Produto, produtos } from 'src/core';

@Controller('produtos')
export class ProdutoController {
  @Get()
  async obterProdutos(): Promise<Produto[]> {
    return produtos.map((produto) => ({
      ...produto,
      especificacoes: { destaque: produto.especificacoes.destaque },
    }));
  }
}
