const products = [
    { id: 1, name: "山のたけのこ", price: 1200, image: "/takenoko1.jpg" },
    { id: 2, name: "里のたけのこ", price: 1000, image: "/takenoko2.jpg" },
  ];
  
  export default function Products() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">商品一覧</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
              <p className="text-green-600 font-bold">¥{product.price}</p>
              <a href={`/cart?product=${product.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                カートに追加
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  