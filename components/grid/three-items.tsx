import { GridTileImage } from "@/components/grid/tile";
import { getCollectionProducts } from "@/lib/shopify";
import type { Product } from "@/lib/shopify/types";
import Link from "next/link";

function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: any;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode,
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = [
    {
      id: "1",
      handle: "acme-prod",
      availableForSale: true,
      title: "Acme Circles T-Shirt",
      description: "This is the description",
      descriptionHtml: "This is the description HTML",
      options: [
        {
          id: "1",
          name: "name",
          values: ["string"],
        },
      ],
      priceRange: {
        maxVariantPrice: {
          amount: "10",
          currencyCode: "$",
        },
        minVariantPrice: {
          amount: "10",
          currencyCode: "$",
        },
      },
      featuredImage: {
        url: "/t-shirt-circles-black.png",
        altText: "Hello World",
        width: 100,
        height: 100,
      },
      images: {
        edges: [
          {
            node: {
              id: "1",
              title: "string",
              availableForSale: true,
              selectedOptions: {
                name: "string",
                value: "string",
              },
              price: {
                amount: "10",
                currencyCode: "$",
              },
            },
          },
        ],
      },
      seo: {
        title: "dff",
        description: "dff",
      },
      tags: ["all", "footware"],
      updatedAt: "time",
    },
    {
      id: "2",
      handle: "acme-prod",
      availableForSale: true,
      title: "Acme Circles T-Shirt",
      description: "This is the description",
      descriptionHtml: "This is the description HTML",
      options: [
        {
          id: "1",
          name: "name",
          values: ["string"],
        },
      ],
      priceRange: {
        maxVariantPrice: {
          amount: "10",
          currencyCode: "$",
        },
        minVariantPrice: {
          amount: "10",
          currencyCode: "$",
        },
      },
      featuredImage: {
        url: "/bag-black.png",
        altText: "Hello World",
        width: 100,
        height: 100,
      },
      images: {
        edges: [
          {
            node: {
              id: "1",
              title: "string",
              availableForSale: true,
              selectedOptions: {
                name: "string",
                value: "string",
              },
              price: {
                amount: "10",
                currencyCode: "$",
              },
            },
          },
        ],
      },
      seo: {
        title: "dff",
        description: "dff",
      },
      tags: ["all", "footware"],
      updatedAt: "time",
    },
    {
      id: "3",
      handle: "acme-prod",
      availableForSale: true,
      title: "Acme Circles T-Shirt",
      description: "This is the description",
      descriptionHtml: "This is the description HTML",
      options: [
        {
          id: "1",
          name: "name",
          values: ["string"],
        },
      ],
      priceRange: {
        maxVariantPrice: {
          amount: "10",
          currencyCode: "$",
        },
        minVariantPrice: {
          amount: "10",
          currencyCode: "$",
        },
      },
      featuredImage: {
        url: "/cup-black.png",
        altText: "Hello World",
        width: 100,
        height: 100,
      },
      images: {
        edges: [
          {
            node: {
              id: "1",
              title: "string",
              availableForSale: true,
              selectedOptions: {
                name: "string",
                value: "string",
              },
              price: {
                amount: "10",
                currencyCode: "$",
              },
            },
          },
        ],
      },
      seo: {
        title: "dff",
        description: "dff",
      },
      tags: ["all", "footware"],
      updatedAt: "time",
    },
  ];

  // if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
