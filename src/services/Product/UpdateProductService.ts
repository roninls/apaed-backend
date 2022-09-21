import { getCustomRepository } from 'typeorm';
import ProductsRepository from '../../repositories/ProductsRepository';
import Product from '../../models/Product';

interface IRequestDTO {
  id: string;
  name: string;
  brand: string;
  ncm_id: string;
  active: boolean;
  valor_product: number;
}

class UpdateProductService {
  public async execute(
    toUpdateProduct: IRequestDTO,
  ): Promise<Product | undefined> {
    console.log(toUpdateProduct)
    const productsRepository = getCustomRepository(ProductsRepository);
    const updateResult = await productsRepository.update(
      {
        ncm_id: toUpdateProduct.ncm_id,
      },
      toUpdateProduct,
    );

    if (updateResult.affected) {
      return await productsRepository.findOne({
        where: { ncm_id: toUpdateProduct.ncm_id },
      });
    }
    return undefined;
  }
}

export default UpdateProductService;
