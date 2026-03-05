import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";

const search = () => {
  const {
    data: movies,
    loading: moviesLoding,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    }),
  );
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover" />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center items-center mt-20">
              <Image source={icons.logo} className="w-12 h10 mb-5" />
            </View>
            <View className="my-5">
              <SearchBar placeholder="search for Movie" />
            </View>
            {moviesLoding && (
              <ActivityIndicator size={"large"} color={"#0000ff"} className="my-3" />
            )}
            {moviesError && (
              <Text className="text-red-500 px-5 my-3">Error: {moviesError?.message}</Text>
            )}
            {!moviesLoding && !moviesError && "SEARCH Term".trim() && movies ? (
              <Text className="text-xl text-white font-bold">Search for {""}</Text>
            ) : (
              <Text className="text-accent">Search Term</Text>
            )}
          </>
        }
      />
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
