import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';

export default function App() {
  const [started, setStarted] = useState(false); // Trạng thái xác định màn hình

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!started ? (
        // Màn hình chào mừng
        <View style={styles.welcomeContainer}>
          <Image
            source={{ uri: 'https://source.unsplash.com/800x800/?person,groceries' }} 
            style={styles.topImage}
            resizeMode="cover"
          />
          <Text style={styles.title}>Welcome to Our Store</Text>
          <Text style={styles.subtitle}>
            Get your groceries in as fast as one hour
          </Text>
          <TouchableOpacity 
            style={styles.getStartedButton} 
            onPress={() => setStarted(true)}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Màn hình nhập số điện thoại
        <View style={styles.content}>
          {/* Nút quay lại */}
          <TouchableOpacity onPress={() => setStarted(false)} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Get your groceries with nectar</Text>

          {/* Nhập số điện thoại */}
          <View style={styles.phoneInput}>
            <Image
              source={{ uri: 'https://flagcdn.com/w320/bd.png' }} // Quốc kỳ Bangladesh
              style={styles.flag}
            />
            <Text style={styles.countryCode}>+880</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              placeholderTextColor="#aaa"
            />
          </View>

          {/* Hoặc kết nối với mạng xã hội */}
          <Text style={styles.socialText}>Or connect with social media</Text>

          <TouchableOpacity style={[styles.button, styles.googleButton]}>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.facebookButton]}>
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  topImage: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    position: 'relative', // Đảm bảo các thành phần con có thể định vị theo tương đối
  },
  backButton: {
    position: 'absolute', // Đặt nút back ở trên cùng bên trái
    top: 40, // Căn lề trên (điều chỉnh nếu cần)
    left: 20, // Căn lề trái
    zIndex: 1, // Đảm bảo nút nằm trên các thành phần khác
  },
  backButtonText: {
    fontSize: 18,
    color: '#000', // Màu đen cho nút quay lại
    fontWeight: 'bold',
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    paddingVertical: 10,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  socialText: {
    marginVertical: 15,
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});