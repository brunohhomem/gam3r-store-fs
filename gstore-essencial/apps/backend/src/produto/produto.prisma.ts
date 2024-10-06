import { Injectable } from '@nestjs/common';
import { PrismaProvider } from './../db/prisma.provider';
import { Produto } from '@gstore/core';

@Injectable()
export class ProdutoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async salvar(produto: Produto): Promise<void> {
    await this.prisma.produto.upsert({
      where: { id: produto.id ?? -1 },
      update: produto,
      create: produto,
    });
  }

  async obter(): Promise<Produto[]> {
    return this.prisma.produto.findMany() as any;
  }

  async obterPorId(id: number): Promise<Produto | null> {
    const produto = await this.prisma.produto.findUnique({ where: { id } });
    return produto as any;
  }

  async excluir(id: number): Promise<void> {
    await this.prisma.produto.delete({ where: { id } });
  }
}
