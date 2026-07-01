import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';

export default function App() {
  const lista = [
    {id: '1', nome: 'Ssd M.2 Kingston Nv3 1tb Nvme 6000/4000 Mb/s', preco: 'R$1.099,99', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_845383-MLA101920263317_122025-F.webp'},
    {id: '2', nome: 'Teclado Mecânico Gamer Redragon Kumara, Anti-Ghosting, RGB, Switch Outemu Blue, ABNT2, Preto, PT', preco: 'R$175.00', imagem: 'https://images7.kabum.com.br/produtos/fotos/93157/93157_1523969490_index_gg.jpg'},
    {id: '3', nome: 'Monitor Gamer Curvo LG UltraGear 34", 2K WQHD, UltraWide, 160Hz, 1ms, FreeSync Premium, HDR10, Som Integrado', preco: '2.199,00', imagem: 'https://images8.kabum.com.br/produtos/fotos/472908/monitor-gamer-lg-ultragear-lg-34-curvo-led-wqhd-ultrawide-160hz-1ms-displayport-e-hdmi-amd-freesync-premium-hdr10-99-srgb-34gp63a-b_1717591886_gg.jpg'},
    {id: '4', nome: 'Mouse Gamer Logitech G502 Hero, RGB, 16000 DPI', preco: 'R$239.90', imagem: 'https://images7.kabum.com.br/produtos/fotos/sync_mirakl/174167/xlarge/Mouse-Gamer-Logitech-G502-Hero-RGB-16000-DPI-11-Bot-es-Lightsync-Ajuste-de-Peso-910-005550_1772826230.jpg'},
    {id: '5', nome: 'Memória RAM Kingston Fury Beast, 32GB 5600MHz DDR5 CL40, DIMM, Preto', preco: 'R$3.229,90', imagem: 'https://images8.kabum.com.br/produtos/fotos/708328/memoria-ram-kingston-fury-beast-32gb-5600mhz-ddr5-cl40-dimm-preto-kf556c40bb-32_1741611807_gg.jpg'},
    {id: '6', nome: 'Fonte MSI MAG A650BN, 650W, 80 Plus Bronze, PFC Ativo, Com Cabo, Preto', preco: 'R$299.99', imagem: 'https://images8.kabum.com.br/produtos/fotos/369658/fonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0_1665770996_gg.jpg'},
    {id: '7', nome: 'Placa de Vídeo ASUS RTX 5060 Dual NVIDIA GeForce, 8GB, GDDR7, 128', preco: 'R$2.199,00', imagem: 'https://images7.kabum.com.br/produtos/fotos/1000487/placa-de-video-asus-rtx-5060-dual-nvidia-geforce-8gb-gddr7-128-bit-dual-rtx5060-8g_1770982522_gg.jpg'},
    {id: '8', nome: 'Air Cooler Para Processador Deepcool Ak400 Bk, Intel/Amd', preco: 'R$154.70', imagem: 'https://images4.kabum.com.br/produtos/fotos/sync_mirakl/460434/xlarge/Air-Cooler-Para-Processador-Deepcool-Ak400-Bk-Intel-Amd-Preto_1778609915.jpg'},
    {id: '9', nome: 'Placa Mãe ASUS B650M-AYW Wi-Fi, AM5, mATX, DDR5, Wi-fi, Bluetooth', preco: 'R$749.99', imagem: 'https://images9.kabum.com.br/produtos/fotos/726929/placa-mae-asus-b650m-ayw-wi-fi-am5-matx-ddr5-wi-fi-bluetooth-90mb1ki0-m0eay0_1753876129_gg.jpg'},
    {id: '10', nome: 'Processador AMD Ryzen 7 7800X3D, 5.0GHz Max Turbo, Cache 104MB, AM5, 8 Núcleos, Vídeo Integrado', preco: 'R$1.997,99', imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000910wof3.jpg'}
    
  ]

  return (
    <View style={styles.container}>
      <FlatList
      data={lista}
      renderItem={({item}) => <Eletro data ={item}/>}
      />
    </View>
  );
}

function Eletro({data}) {

  return(
    <View style={styles.bloco}>
      <Image
      source={{uri: data.imagem}}
      style={styles.imagemProduto}
      />
      <Text style={styles.textoProduto}>nome: {data.nome} </Text>
      <Text style={styles.textoProduto}>preco: {data.preco}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, 
  },
  bloco: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: '#ddd'
  },
  textoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textoPreco: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },

  imagemProduto: {
    width: 150,
    height: 150,
    resizeMode: 'contain', 
  },
});
