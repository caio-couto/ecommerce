class DataBase 
{
  constructor()
  {
    this.storage = 
    { 
      products: 
      [
        {
          _id: 80028922,
          productName: "Fall Limited Edition Sneakers",
          description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
          fullPrice: 250.00.toFixed(2),
          isRebate: true,
          rebate: 50,
          price: 125.00.toFixed(2),
          image: "./images/image-product-1-thumbnail.jpg"
        }
      ]
    }
  }

  findById(id)
  {
    if (typeof id != "string")
    {
      throw new TypeError('wrong parameter type');
    }

    return this.storage.products.find((element) => element._id == id);
  }
}

const dataBase = new DataBase();
