import React, { useEffect } from 'react'
import { useRef } from 'react'
import { styled } from '@stitches/react'
import { useTrail, animated } from '@react-spring/web'

const AppContainer = styled('div', {
  width: '100%',
  height: `calc(100vh - 204.67px)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Container = styled('div', {
  display: 'flex',
  gap: 10,
  marginBottom: 80,
})

const Box = styled('div', {
  position: 'relative',
  height: 50,
  width: 50,
})

const SharedStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Noto Serif TC',
  fontWeight: 800,
  backfaceVisibility: 'hidden',
}

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#fafafa',
  border: 'solid 2px #52796F',
  color: '#52796F',
})

const BackBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#b9cac5',
  border: 'solid 2px #b9cac5',
  color: '#fafafa',
})

const items = ['L', 'O', 'A', 'D', 'I', 'N', 'G']
const item_front = ['B', 'O', 'O', 'K', '', '書', '易']

export default function Loading() {
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }))

  const isFlipped = useRef(false)

  useEffect(() => {
    const handleClick = () => {
      if (isFlipped.current) {
        api.start({
          rotateX: 0,
        })
        isFlipped.current = false
      } else {
        api.start({
          rotateX: 180,
        })
        isFlipped.current = true
      }
    }

    const timmer = setInterval(() => {
      handleClick()
    }, 1500)
    return () => clearInterval(timmer)
  }, [])

  return (
    <AppContainer>
      <Container>
        {trail.map(({ rotateX }, i) => (
          <Box key={i}>
            <FrontBox
              key={items[i]}
              style={{
                transform: rotateX.to(
                  (val) => `perspective(600px) rotateX(${val}deg)`
                ),
                transformStyle: 'preserve-3d',
              }}
            >
              {item_front[i]}
            </FrontBox>

            <BackBox
              style={{
                transform: rotateX.to(
                  (val) => `perspective(600px) rotateX(${180 - val}deg)`
                ),
                transformStyle: 'preserve-3d',
              }}
            >
              {items[i]}
            </BackBox>
          </Box>
        ))}
      </Container>
    </AppContainer>
  )
}
