'use client'

import { Produto } from '@/core'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export interface ProdutoItemProps {
  produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props

  return (
    <Link
      href={`/produto/${produto.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="h-48 w-full relative">
        <Image
          src={produto.imagem}
          alt={produto.nome}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/10">
        <span className="text-lg font-semibold">{produto.nome}</span>
        <span className="text-sm border-b border-dashed self-start">
          {produto.especificacoes.destaque}
        </span>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {props.produto.precoBase}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {props.produto.precoPromocional}
          </span>
        </div>
        <button
          className="flex bg-violet-700 rounded-full justify-center items-center h-8 gap-2 hover:border-2 border-emerald-500"
          onClick={(e: any) => {
            e.preventDefault()
            console.log('Adicionar ao carrinho')
          }}
        >
          <span>Adicionar</span>
          <IconShoppingCartPlus size={20} />
        </button>
      </div>
    </Link>
  )
}
