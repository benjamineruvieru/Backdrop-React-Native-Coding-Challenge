import {
  StyleSheet,
  View,
  useWindowDimensions,
  Image,
  Animated,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {scale} from 'react-native-size-matters';
import PagerHeader from '../components/PagerHeader';
import Text from '../components/Text';
import FavoriteButton from '../components/FavoriteButton';
import {useCat} from '../hooks/useCat';
import {useMMKVString} from 'react-native-mmkv';
import Lottie from 'lottie-react-native';

const pawloading = require('../assets/lottie/pawloading.json');
const caterror = require('../assets/lottie/caterror.json');

const data1 = [
  {
    breeds: [
      {
        weight: {
          imperial: '8 - 16',
          metric: '4 - 7',
        },
        id: 'amau',
        name: 'Arabian Mau',
        vcahospitals_url: '',
        temperament:
          'Affectionate, Agile, Curious, Independent, Playful, Loyal',
        origin: 'United Arab Emirates',
        country_codes: 'AE',
        country_code: 'AE',
        description:
          'Arabian Mau cats are social and energetic. Due to their energy levels, these cats do best in homes where their owners will be able to provide them with plenty of playtime, attention and interaction from their owners. These kitties are friendly, intelligent, and adaptable, and will even get along well with other pets and children.',
        life_span: '12 - 14',
        indoor: 0,
        alt_names: 'Alley cat',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 4,
        grooming: 1,
        health_issues: 1,
        intelligence: 3,
        shedding_level: 1,
        social_needs: 3,
        stranger_friendly: 3,
        vocalisation: 1,
        experimental: 0,
        hairless: 0,
        natural: 1,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Arabian_Mau',
        hypoallergenic: 0,
        reference_image_id: 'k71ULYfRr',
      },
    ],
    id: 'k71ULYfRr',
    url: 'https://cdn2.thecatapi.com/images/k71ULYfRr.jpg',
    width: 2048,
    height: 1554,
  },
  {
    breeds: [
      {
        weight: {
          imperial: '8 - 16',
          metric: '4 - 7',
        },
        id: 'amau',
        name: 'Arabian Mau',
        vcahospitals_url: '',
        temperament:
          'Affectionate, Agile, Curious, Independent, Playful, Loyal',
        origin: 'United Arab Emirates',
        country_codes: 'AE',
        country_code: 'AE',
        description:
          'Arabian Mau cats are social and energetic. Due to their energy levels, these cats do best in homes where their owners will be able to provide them with plenty of playtime, attention and interaction from their owners. These kitties are friendly, intelligent, and adaptable, and will even get along well with other pets and children.',
        life_span: '12 - 14',
        indoor: 0,
        alt_names: 'Alley cat',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 4,
        grooming: 1,
        health_issues: 1,
        intelligence: 3,
        shedding_level: 1,
        social_needs: 3,
        stranger_friendly: 3,
        vocalisation: 1,
        experimental: 0,
        hairless: 0,
        natural: 1,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Arabian_Mau',
        hypoallergenic: 0,
        reference_image_id: 'k71ULYfRr',
      },
    ],
    id: 'mnD88Lsjd',
    url: 'https://cdn2.thecatapi.com/images/mnD88Lsjd.jpg',
    width: 1920,
    height: 1200,
  },
  {
    breeds: [
      {
        weight: {
          imperial: '8 - 15',
          metric: '4 - 7',
        },
        id: 'chee',
        name: 'Cheetoh',
        temperament: 'Affectionate, Gentle, Intelligent, Social',
        origin: 'United States',
        country_codes: 'US',
        country_code: 'US',
        description:
          'The Cheetoh has a super affectionate nature and real love for their human companions; they are intelligent with the ability to learn quickly. You can expect that a Cheetoh will be a fun-loving kitty who enjoys playing, running, and jumping through every room in your house.',
        life_span: '12 - 14',
        indoor: 0,
        alt_names: ' ',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 4,
        grooming: 1,
        health_issues: 1,
        intelligence: 5,
        shedding_level: 1,
        social_needs: 3,
        stranger_friendly: 4,
        vocalisation: 5,
        experimental: 0,
        hairless: 0,
        natural: 0,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Bengal_cat#Cheetoh',
        hypoallergenic: 0,
        reference_image_id: 'IFXsxmXLm',
      },
    ],
    id: 'LX9uvE3dl',
    url: 'https://cdn2.thecatapi.com/images/LX9uvE3dl.jpg',
    width: 1919,
    height: 1919,
  },
  {
    breeds: [
      {
        weight: {
          imperial: '5 - 9',
          metric: '2 - 4',
        },
        id: 'munc',
        name: 'Munchkin',
        vetstreet_url: 'http://www.vetstreet.com/cats/munchkin',
        temperament: 'Agile, Easy Going, Intelligent, Playful',
        origin: 'United States',
        country_codes: 'US',
        country_code: 'US',
        description:
          'The Munchkin is an outgoing cat who enjoys being handled. She has lots of energy and is faster and more agile than she looks. The shortness of their legs does not seem to interfere with their running and leaping abilities.',
        life_span: '10 - 15',
        indoor: 0,
        lap: 1,
        alt_names: '',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 4,
        grooming: 2,
        health_issues: 3,
        intelligence: 5,
        shedding_level: 3,
        social_needs: 5,
        stranger_friendly: 5,
        vocalisation: 3,
        experimental: 0,
        hairless: 0,
        natural: 0,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 1,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Munchkin_(cat)',
        hypoallergenic: 0,
        reference_image_id: 'j5cVSqLer',
      },
    ],
    id: 'D2J3R7sUq',
    url: 'https://cdn2.thecatapi.com/images/D2J3R7sUq.jpg',
    width: 1024,
    height: 768,
  },
  {
    breeds: [
      {
        weight: {
          imperial: '5 - 10',
          metric: '2 - 5',
        },
        id: 'orie',
        name: 'Oriental',
        cfa_url: 'http://cfa.org/Breeds/BreedsKthruR/Oriental.aspx',
        vetstreet_url: 'http://www.vetstreet.com/cats/oriental',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/oriental',
        temperament:
          'Energetic, Affectionate, Intelligent, Social, Playful, Curious',
        origin: 'United States',
        country_codes: 'US',
        country_code: 'US',
        description:
          'Orientals are passionate about the people in their lives. They become extremely attached to their humans, so be prepared for a lifetime commitment. When you are not available to entertain her, an Oriental will divert herself by jumping on top of the refrigerator, opening drawers, seeking out new hideaways.',
        life_span: '12 - 14',
        indoor: 0,
        lap: 1,
        alt_names: 'Foreign Type',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 5,
        grooming: 1,
        health_issues: 3,
        intelligence: 5,
        shedding_level: 3,
        social_needs: 5,
        stranger_friendly: 3,
        vocalisation: 5,
        experimental: 0,
        hairless: 0,
        natural: 0,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Oriental_Shorthair',
        hypoallergenic: 1,
        reference_image_id: 'LutjkZJpH',
      },
    ],
    id: 'UYp1-LQxI',
    url: 'https://cdn2.thecatapi.com/images/UYp1-LQxI.jpg',
    width: 768,
    height: 1024,
  },
  {
    breeds: [
      {
        weight: {
          imperial: '9 - 14',
          metric: '4 - 6',
        },
        id: 'pers',
        name: 'Persian',
        cfa_url: 'http://cfa.org/Breeds/BreedsKthruR/Persian.aspx',
        vetstreet_url: 'http://www.vetstreet.com/cats/persian',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/persian',
        temperament: 'Affectionate, loyal, Sedate, Quiet',
        origin: 'Iran (Persia)',
        country_codes: 'IR',
        country_code: 'IR',
        description:
          'Persians are sweet, gentle cats that can be playful or quiet and laid-back. Great with families and children, they absolutely love to lounge around the house. While they don’t mind a full house or active kids, they’ll usually hide when they need some alone time.',
        life_span: '14 - 15',
        indoor: 0,
        lap: 1,
        alt_names: 'Longhair, Persian Longhair, Shiraz, Shirazi',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 2,
        dog_friendly: 2,
        energy_level: 1,
        grooming: 5,
        health_issues: 3,
        intelligence: 3,
        shedding_level: 4,
        social_needs: 4,
        stranger_friendly: 2,
        vocalisation: 1,
        experimental: 0,
        hairless: 0,
        natural: 1,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Persian_(cat)',
        hypoallergenic: 0,
        reference_image_id: '-Zfz5z2jK',
      },
    ],
    id: '3Pem6K30P',
    url: 'https://cdn2.thecatapi.com/images/3Pem6K30P.jpg',
    width: 1250,
    height: 1387,
  },
  {
    breeds: [
      {
        weight: {
          imperial: '12 - 20',
          metric: '5 - 9',
        },
        id: 'ragd',
        name: 'Ragdoll',
        cfa_url: 'http://cfa.org/Breeds/BreedsKthruR/Ragdoll.aspx',
        vetstreet_url: 'http://www.vetstreet.com/cats/ragdoll',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/ragdoll',
        temperament: 'Affectionate, Friendly, Gentle, Quiet, Easygoing',
        origin: 'United States',
        country_codes: 'US',
        country_code: 'US',
        description:
          'Ragdolls love their people, greeting them at the door, following them around the house, and leaping into a lap or snuggling in bed whenever given the chance. They are the epitome of a lap cat, enjoy being carried and collapsing into the arms of anyone who holds them.',
        life_span: '12 - 17',
        indoor: 0,
        lap: 1,
        alt_names: 'Rag doll',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 3,
        grooming: 2,
        health_issues: 3,
        intelligence: 3,
        shedding_level: 3,
        social_needs: 5,
        stranger_friendly: 3,
        vocalisation: 1,
        experimental: 0,
        hairless: 0,
        natural: 0,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Ragdoll',
        hypoallergenic: 0,
        reference_image_id: 'oGefY4YoG',
      },
    ],
    id: 'bCHc9dHit',
    url: 'https://cdn2.thecatapi.com/images/bCHc9dHit.jpg',
    width: 1280,
    height: 853,
  },
  {
    breeds: [
      {
        weight: {
          imperial: '12 - 20',
          metric: '5 - 9',
        },
        id: 'ragd',
        name: 'Ragdoll',
        cfa_url: 'http://cfa.org/Breeds/BreedsKthruR/Ragdoll.aspx',
        vetstreet_url: 'http://www.vetstreet.com/cats/ragdoll',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/ragdoll',
        temperament: 'Affectionate, Friendly, Gentle, Quiet, Easygoing',
        origin: 'United States',
        country_codes: 'US',
        country_code: 'US',
        description:
          'Ragdolls love their people, greeting them at the door, following them around the house, and leaping into a lap or snuggling in bed whenever given the chance. They are the epitome of a lap cat, enjoy being carried and collapsing into the arms of anyone who holds them.',
        life_span: '12 - 17',
        indoor: 0,
        lap: 1,
        alt_names: 'Rag doll',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 3,
        grooming: 2,
        health_issues: 3,
        intelligence: 3,
        shedding_level: 3,
        social_needs: 5,
        stranger_friendly: 3,
        vocalisation: 1,
        experimental: 0,
        hairless: 0,
        natural: 0,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Ragdoll',
        hypoallergenic: 0,
        reference_image_id: 'oGefY4YoG',
      },
    ],
    id: 'Sy9SgPE0B',
    url: 'https://cdn2.thecatapi.com/images/Sy9SgPE0B.jpg',
    width: 750,
    height: 937,
  },
  {
    breeds: [
      {
        weight: {
          imperial: '5 - 10',
          metric: '2 - 5',
        },
        id: 'orie',
        name: 'Oriental',
        cfa_url: 'http://cfa.org/Breeds/BreedsKthruR/Oriental.aspx',
        vetstreet_url: 'http://www.vetstreet.com/cats/oriental',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/oriental',
        temperament:
          'Energetic, Affectionate, Intelligent, Social, Playful, Curious',
        origin: 'United States',
        country_codes: 'US',
        country_code: 'US',
        description:
          'Orientals are passionate about the people in their lives. They become extremely attached to their humans, so be prepared for a lifetime commitment. When you are not available to entertain her, an Oriental will divert herself by jumping on top of the refrigerator, opening drawers, seeking out new hideaways.',
        life_span: '12 - 14',
        indoor: 0,
        lap: 1,
        alt_names: 'Foreign Type',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 5,
        grooming: 1,
        health_issues: 3,
        intelligence: 5,
        shedding_level: 3,
        social_needs: 5,
        stranger_friendly: 3,
        vocalisation: 5,
        experimental: 0,
        hairless: 0,
        natural: 0,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Oriental_Shorthair',
        hypoallergenic: 1,
        reference_image_id: 'LutjkZJpH',
      },
    ],
    id: 'O7FnoegHR',
    url: 'https://cdn2.thecatapi.com/images/O7FnoegHR.jpg',
    width: 3402,
    height: 2268,
  },
  {
    breeds: [
      {
        weight: {
          imperial: '8 - 15',
          metric: '4 - 7',
        },
        id: 'siam',
        name: 'Siamese',
        cfa_url: 'http://cfa.org/Breeds/BreedsSthruT/Siamese.aspx',
        vetstreet_url: 'http://www.vetstreet.com/cats/siamese',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/siamese',
        temperament: 'Active, Agile, Clever, Sociable, Loving, Energetic',
        origin: 'Thailand',
        country_codes: 'TH',
        country_code: 'TH',
        description:
          'While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.',
        life_span: '12 - 15',
        indoor: 0,
        lap: 1,
        alt_names: 'Siam, Thai Cat',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 5,
        grooming: 1,
        health_issues: 1,
        intelligence: 5,
        shedding_level: 2,
        social_needs: 5,
        stranger_friendly: 5,
        vocalisation: 5,
        experimental: 0,
        hairless: 0,
        natural: 0,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Siamese_(cat)',
        hypoallergenic: 1,
        reference_image_id: 'ai6Jps4sx',
      },
    ],
    id: '84-HSUBbt',
    url: 'https://cdn2.thecatapi.com/images/84-HSUBbt.jpg',
    width: 1200,
    height: 800,
  },
];

const LIST_ITEM_SIZE = 75;

const LoadingScreen = () => {
  return (
    <View style={styles().loadingscreen}>
      <Lottie
        source={pawloading}
        style={styles().loadinglottie}
        autoPlay
        loop
      />
    </View>
  );
};

const ErrorScreen = ({loadExtraCats}) => {
  return (
    <View style={styles().loadingscreen}>
      <Lottie source={caterror} style={styles().errorlottie} autoPlay loop />
      <TouchableOpacity onPress={loadExtraCats}>
        <Text>An Error Occurred!</Text>
      </TouchableOpacity>
    </View>
  );
};

const RenderEmptyList = ({isLoading, isError, loadExtraCats}) => {
  if (isLoading) {
    return <LoadingScreen />;
  }
  return <ErrorScreen loadExtraCats={loadExtraCats} />;
};

const RenderCatList = ({item, scale, likedList}) => {
  return (
    <Animated.View style={styles(scale).listview}>
      <Image
        source={{uri: item.url}}
        resizeMode={'cover'}
        style={styles().listimg}
      />
      <Text style={styles().listtext}>{item.breeds[0].name}</Text>
      <FavoriteButton
        {...{
          likedList,
          id: item.id,
          name: item.breeds[0].name,
          url: item.url,
        }}
      />
    </Animated.View>
  );
};

const AllCatsScreen = () => {
  const SCREEN_WIDTH = useWindowDimensions().width;
  const [likedList] = useMMKVString('likedCat');
  const [pageNumber, setPagenumber] = useState(0);
  const [catlist, setCatlist] = useState([]);
  const {data, isLoading, isSuccess, isError, error, isFetched} =
    useCat(pageNumber);
  const scrollY = useRef(new Animated.Value(0)).current;
  //console.log(error?.message);

  useEffect(() => {
    if (data) {
      console.log('updateing list lenght', [...catlist, ...data].length);
      setCatlist(catlist => [...catlist, ...data]);
    }
  }, [data, isSuccess]);

  const loadExtraCats = () => {
    if (!isLoading) {
      console.log('calling');
      setPagenumber(page => page + 1);
    }
  };
  return (
    <View style={styles(SCREEN_WIDTH).container}>
      <PagerHeader title={'All Cats'} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id + index}
        data={catlist}
        extraData={catlist}
        ListEmptyComponent={() => (
          <RenderEmptyList
            {...{isLoading, isError, isSuccess, loadExtraCats}}
          />
        )}
        contentContainerStyle={{flex: catlist?.length > 0 ? 0 : 1}}
        ListHeaderComponent={() => <View />}
        ListHeaderComponentStyle={{height: 30}}
        ListFooterComponent={() => (isError ? null : <ActivityIndicator />)}
        onEndReached={loadExtraCats}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            LIST_ITEM_SIZE * index,
            LIST_ITEM_SIZE * (3 + index),
          ];
          const outputRange = [1, 1, 1, 0];
          const scale = scrollY.interpolate({inputRange, outputRange});

          return (
            <RenderCatList
              item={item}
              scale={scale}
              likedList={JSON.parse(likedList)}
            />
          );
        }}
      />
    </View>
  );
};

export default AllCatsScreen;

const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: props,
      paddingHorizontal: scale(20),
    },
    listview: {
      flexDirection: 'row',
      marginBottom: 15,
      alignItems: 'center',
      height: LIST_ITEM_SIZE - 15,
      transform: [{scale: props}],
    },
    listimg: {
      height: 50,
      width: 50,
      backgroundColor: '#D3D3D3',
      borderRadius: 10,
    },
    listtext: {
      flex: 1,
      paddingLeft: 10,
      fontSize: 15,
    },
    loadinglottie: {
      height: 100,
      width: 100,
    },
    errorlottie: {
      height: 200,
      width: 200,
    },
    loadingscreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  });
