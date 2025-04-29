import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      image: 'https://helixir.com.br/cdn/shop/articles/IMG_1472.jpg?v=1717493269',
      title: 'Bleu de Chanel',
      description: 'Chanel',
      price: 800.99,
    },
    {
      image: 'https://m.media-amazon.com/images/I/710HXzbWPKL.jpg',
      title: 'Creed - Aventus',
      description: 'Creed',
      price: 3000.99,
    },
    {
      image: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw75f5ec45/images/hi-res-BR/3386460101035.1_1000px.jpg?sw=556&sh=680&sm=fit',
      title: 'Montblanc - Explorer',
      description: 'montblanc',
      price: 500.99,
    },
    {
      image: 'https://img.lojasrenner.com.br/item/542926772/zoom/1.jpg',
      title: 'Dylan Blue - Versace',
      description: 'Versace',
      price: 750.0,
    },
    {
      image: 'https://fragrance.vteximg.com.br/arquivos/ids/160910-1000-1000/eros-versace-edt-30ml.png?v=638445595090300000',
      title: 'Eros - Versace',
      description: 'Versace',
      price: 599.99,
    },
    {
      image: 'https://cdn.50-ml.com/media/catalog/product/s/t/stephane_humbert_lucas_god_of_fire_eau_de_parfum_50_ml_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=540&width=540',
      title: 'God of Fire - Stephane Humbert Lucas',
      description: 'Stephane Humbert Lucas',
      price: 1000.99,
    },
  ];

  const handleBuy = () => {
    if (selectedProduct) {
      alert(`Produto: ${selectedProduct.title}\nPreço: R$${selectedProduct.price.toFixed(2)}`);
    } else {
      alert('Nenhum produto selecionado.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            {...product}
            onSelect={() => setSelectedProduct(product)}
            isSelected={selectedProduct?.title === product.title}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Comprar" onPress={handleBuy} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100, 
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    width: '80%',
    alignItems: 'center',
  },
});
