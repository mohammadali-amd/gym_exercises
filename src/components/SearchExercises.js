import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import { HorizontalRule } from '@mui/icons-material'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartData]);
    }

    fetchExercisesData();
  }, [])


  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const SearchExercises = exercisesData.filter(
        (exercises) => exercises.name.toLowerCase().includes(search)
          || exercises.target.toLowerCase().includes(search)
          || exercises.equipment.toLowerCase().includes(search)
          || exercises.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(SearchExercises);
    }
  }

  return (
    <Stack alignItems='center' mt="37" justifyContent="center" p="20px">

      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box
        position="relative"
        mb="72px"
      >
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            posision: "absolute",
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          posision: 'relative',
          width: '100%',
          p: '20px'
        }}
      >
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises