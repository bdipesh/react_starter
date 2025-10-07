import { Container } from "@chakra-ui/react"

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container fluid>
        {children}
      </Container>

    </>
  )
}

export default DefaultLayout;