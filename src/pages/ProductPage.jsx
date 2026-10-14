import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS, getCluster } from "../data/products";
import ProductSubNav from "../components/product/ProductSubNav";
import ProductHero from "../components/product/ProductHero";
import FeatureBlock from "../components/product/FeatureBlock";
import SuiteCrossSell from "../components/product/SuiteCrossSell";
import ProductCTA from "../components/product/ProductCTA";
import PAGE_CSS from "../components/product/pageStyles";
import NotFound from "./NotFound";

const ProductPage = () => {
  const { slug } = useParams();
  const product = PRODUCTS[slug];

  useEffect(() => {
    if (product) document.title = `${product.name} — ${product.category} | Talent Meet`;
  }, [product]);

  if (!product) return <NotFound />;

  const cluster = getCluster(product.cluster);
  const salesHref = `/contact-sales?product=${product.slug}`;
  const demoHref = `/contact-sales?product=${product.slug}&intent=demo`;

  return (
    <div className="pd-page bg-white">
      <style>{PAGE_CSS}</style>

      <ProductSubNav product={product} cluster={cluster} />

      <ProductHero
        product={product}
        cluster={cluster}
        salesHref={salesHref}
        demoHref={demoHref}
      />

      {product.features.map((feature, i) => (
        <FeatureBlock
          key={feature.title}
          feature={feature}
          index={i}
          total={product.features.length}
          cluster={cluster}
        />
      ))}

      <SuiteCrossSell product={product} cluster={cluster} />

      <ProductCTA
        productName={product.name}
        accent={cluster.accent}
        salesHref={salesHref}
        demoHref={demoHref}
        demoLabel={product.secondaryCta}
      />
    </div>
  );
};

export default ProductPage;
