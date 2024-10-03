import useProdutos from '@/data/hooks/useProdutos'

export default function PaginaProduto(props: any) {
  const id = +props.params.id
  const { produtos } = useProdutos()
  const produto = produtos.find(p => p.id === id)

  return produto ? <div>{produto.nome}</div> : <div>Produto não encontrado</div>
}
