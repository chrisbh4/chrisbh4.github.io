import React from 'react';
import '@fontsource/kanit/500.css';
import '@fontsource/rajdhani';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Flex,
  Center,
  Image,
  Icon,
  ListItem,
  UnorderedList,
  HStack,
  Stack
} from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
  FaAngellist,
  FaIdBadge
} from "react-icons/fa";

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { EmailIcon } from '@chakra-ui/icons';
import Projects from './components/Projects';


function App() {
  function handleClick(event, id) {
    // On desktop, keep the existing animation behavior for project cards
    const target = event.target;
    const card = target.closest('.project-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.classList.add('ripple');
  }

  return (
    <ChakraProvider >
      {/*Main Body */}
      <Box textAlign="center" fontSize="xl" fontFamily={'Rajdhani'} >
        <Box id='nav' bg={"#393e61"} w="full" h={{ base: "auto", md: "6em" }} position={'fixed'} zIndex={1} py={{ base: 4, md: 0 }} >
          <Flex
            justify={{ base: "center", md: "space-between" }}
            align={'center'}
            h={{ base: "auto", md: "full" }}
            color={'white'}
            direction={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 0 }}
          >
            <Text fontSize={{ base: "3xl", md: "5xl" }} ml={{ base: 0, md: '8%' }}>Christian Brown</Text>
            <Flex
              align='center'
              justify={{ base: 'center', md: 'flex-end' }}
              pr={{ base: 0, md: '2%' }}
              w={{ base: "100%", md: "50%" }}
              direction={{ base: "column", sm: "row" }}
              gap={{ base: 2, sm: 4 }}
              wrap="wrap"
            >
              <Link href='#home' style={{ textDecoration: "none" }} onClick={(e) => handleClick(e, 'home')} fontWeight={'medium'} fontSize={{ base: 'lg', md: '2xl' }}>Home</Link>
              <Link href='#past-experience' style={{ textDecoration: "none" }} onClick={(e) => handleClick(e, 'past-experience')} fontWeight={'medium'} fontSize={{ base: 'lg', md: '2xl' }}>Past Experiences</Link>
              <Link href='#skills' style={{ textDecoration: "none" }} onClick={(e) => handleClick(e, 'skills')} fontWeight={'medium'} fontSize={{ base: 'lg', md: '2xl' }}>Skills</Link>
              <Link href='#projects' style={{ textDecoration: "none" }} onClick={(e) => handleClick(e, 'projects')} fontWeight={'medium'} fontSize={{ base: 'lg', md: '2xl' }}>Projects</Link>
              <Link href='https://drive.google.com/file/d/1XufQ1mrhLEo0wNOf8UehETYVc2D9dvtO/view?usp=sharing' style={{ textDecoration: "none" }}
                    fontWeight={'medium'} fontSize={{ base: 'lg', md: '2xl' }}
                >Resume
              </Link>
              <ColorModeSwitcher justifySelf="flex-end" _hover={{bg: "hidden"}} />
            </Flex>
          </Flex>
        </Box>
        <Box id='home' bg={"#13d7a2"} w="full" minH={{ base: "100vh", md: "600px" }} pt={{ base: '12em', md: '8em' }} pb={'3em'} >
          <Stack
            direction={{ base: "column", lg: "row" }}
            justify={'center'}
            align={'center'}
            spacing={{ base: 8, lg: 16 }}
            px={{ base: 4, md: 8 }}
          >
            <Box boxSize={{ base: '200px', md: '300px' }}>
              <Image
                src='https://imgur.com/N3BB4kx.png'
                alt='Christian Brown'
                borderRadius={'2xl'}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
            <VStack spacing={4} align={{ base: "center", lg: "start" }} maxW={{ base: "100%", lg: "50%" }} pl={{md: "5em"}}>
              <Text fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} textAlign={{ base: "center", lg: "left" }}>
                Hi, my name is Christian Brown.
              </Text>
               <Text fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} textAlign={{ base: "center", lg: "left" }}>
                 I'm a Software Engineer from Sacramento, CA.
              </Text>
              <HStack justify={'center'} ml={{ md: '5em'}} pt={'1em'} spacing={4} wrap="wrap">
                <Link href="https://github.com/chrisbh4">
                  <Icon as={FaGithub} boxSize={{ base: 8, md: 12 }} />
                </Link>
                <Link href="https://www.linkedin.com/in/christian-brown-8770311ba/">
                  <Icon as={FaLinkedin} boxSize={{ base: 8, md: 12 }} />
                </Link>
                <Link href="https://wellfound.com/profile/edit/overview">
                  <Icon as={FaAngellist} boxSize={{ base: 8, md: 12 }} />
                </Link>
                <Link href="https://drive.google.com/file/d/1XufQ1mrhLEo0wNOf8UehETYVc2D9dvtO/view?usp=sharing">
                  <Icon as={FaIdBadge} boxSize={{ base: 8, md: 12 }} />
                </Link>
                <Link href="mailto:chrismbh4@gmail.com">
                  <EmailIcon boxSize={{ base: 8, md: 12 }} />
                </Link>
              </HStack>
            </VStack>
          </Stack>
        </Box>
        <Box id='about' w="full" py={{ base: 8, md: 12 }} px={{ base: 4, md: 8 }} >
        <Box>
          <Text textAlign={'left'} pl={{ base: 4, md: '3em' }} fontSize={{ base: '2xl', md: '4xl' }} pb={'0.5em'}>About</Text>
          <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='white'></Box>
          <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='black'></Box>
        </Box>
          <VStack spacing={6} align='center' fontSize={{ base: 'lg', md: '2xl' }} ml={{ md: '5em'}} pt={'1.5em'} px={{ base: 4, md: '5em', lg: '15em' }}>
            <Box w={{ base: '100%', md: '90%' }}>
              <Text align={'start'}>I'm a Full-Stack Software Engineer with a background in competitive athletics and a passion for building high-impact, user-focused applications. I thrive in fast-paced environments where clear communication, collaboration, and rapid iteration are key to delivering results.
              </Text>
            </Box>
            <Box w={{ base: '100%', md: '90%' }}>
              <Text align={'start'}>Before transitioning into tech, I earned a basketball scholarship to Bacone College in Oklahoma, an experience that shaped my work ethic and resilience. Since then, I've channeled that same drive into software development, building full-stack applications that solve real-world problems and push me to grow technically and creatively.
              </Text>
            </Box>
            <Box w={{ base: '100%', md: '90%' }}>
              <Text align={'start'}>I specialize in modern JavaScript frameworks, backend systems, and scalable architecture. Outside of work, you’ll find me on the basketball court, experimenting in the kitchen, or exploring new technologies through side projects.
              </Text>
            </Box>
          </VStack>
        </Box>
        {/*Past Experience Section */}
        <Box id='past-experience' px={{ base: 4, md: 8 }}>
          <Text textAlign={'left'} pl={{ base: 4, md: '3em' }} fontSize={{ base: '2xl', md: '4xl' }} pb={'0.5em'} mt={'2.5em'}>Past Experience</Text>
          <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='white'></Box>
          <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='black'></Box>
        </Box>

        {/* Experience 1 */}
        <Box id='past-experience-1' w='full' py={{ base: 6, md: '3em' }} px={{ base: 4, md: 8 }}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            maxW="1460px" //* Max-Width set to "1460 since Title is shorter than the others"
            // maxW={{ md: "1650px", xl: "1800px"}}
            mx="auto"
            align="flex-start"
            // spacing={{ base: 6, lg: 26 }}
            gap={{ md: '10em'}}
          >
            <Box minW={{ base: "100%", lg: "340px" }} maxW={{ base: "100%", lg: "340px" }} mt={{ md: '-5px'}} >
              <Text fontSize={{ base: '2xl', md: '4xl' }}>Software Engineer</Text>
              <Text fontSize={{ base: '2xl', md: '4xl' }}>@ Stealth Startup</Text>
              <Text fontSize={{ base: 'md', md: 'xl' }} mt={'1em'}>September 2024 - current</Text>
            </Box>
            <Box flex={1}>
              <Box fontSize={{ base: 'lg', md: '3xl' }} mb={2} mr={{ md: 30}}>
                Technologies: JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, GraphQL, Vercel, Microsoft Azure, Docker, MS SQL Server, GitHub
              </Box>
              <UnorderedList spacing={3} textAlign={'start'} fontSize={{ base: 'md', md: 'lg' }}>
                <ListItem>
                  Developed scalable full-stack solutions using JavaScript, TypeScript, and REST/GraphQL APIs, which aligned with best practices in full stack and web architecture and reduced API response times by up to 40%.
                </ListItem>
                <ListItem>
                  Built autonomous AI agents using JavaScript and Langchain.js to automate research, web scraping, and document understanding workflows across logistic applications.
                </ListItem>
                <ListItem>
                  Monitored AI agent behavior using logging middleware and custom analytics, iterating on tool strategies and prompt designs to reduce hallucination rates by 25%.
                </ListItem>
                <ListItem>
                  Collaborated with mid-sized engineering teams as a technical consultant, enhancing project architecture and tooling decisions for scalable and maintainable codebases.
                </ListItem>
                <ListItem>
                  Integrated and maintained SQL Server databases, crafting optimized queries and stored procedures to support real-time reporting and back-end performance.
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Box>

        {/* Experience 2 */}
        <Box id='past-experience-2' w='full' py={{ base: 6, md: '3em' }} px={{ base: 4, md: 8 }}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            // maxW={{ md: "1650px", lg: "1900px"}}
            maxW="1450px"
            mx="auto"
            align="flex-start"
            // spacing={{ base: 6, lg: 26 }}
            gap={{ md: '10em'}}
          >
            <Box minW={{ base: "100%", lg: "340px" }} maxW={{ base: "100%", lg: "340px" }} mt={{ md: '-5px'}}>
              <Text fontSize={{ base: '2xl', md: '4xl' }}>Full Stack Engineer</Text>
              <Text fontSize={{ base: '2xl', md: '4xl' }}>@ Fly.io</Text>
              <Text fontSize={{ base: 'md', md: 'xl' }} mt={'1em'}>August 2022 - September 2024</Text>
            </Box>
            <Box flex={1}>
              <Box fontSize={{ base: 'lg', md: '3xl' }} mb={2} mr={{ md: 20}}>
                Technologies: Elixir, Phoenix Liveview, JavaScript, Ruby, Go, Postgres, Docker, Flyctl, HTML5, TailwindCSS, Git, Github, Slack
              </Box>
              <UnorderedList spacing={3} textAlign={'start'} fontSize={{ base: 'md', md: 'lg' }}>
                <ListItem>
                  Engineered and maintained RESTful APIs and GraphQL endpoints in line with modern web architecture to optimize data retrieval speed by 25%.
                </ListItem>
                <ListItem>
                  Developed a custom OAuth2 authentication system (using JWT & SSO) to enhance security protocols and reduce login failures by 30%, supporting robust API integration.
                </ListItem>
                <ListItem>
                  Constructed scalable Ruby microservices integrated with Redis caching, achieving a 40% improvement in request handling efficiency and aligning with microservices architecture principles.
                </ListItem>
                <ListItem>
                  Optimized PostgreSQL database queries under high traffic conditions to enhance overall application performance, showcasing expertise in full stack development and data management.
                </ListItem>
                <ListItem>
                   Established automated CI/CD pipelines with GitHub Actions and Docker to facilitate reliable testing and accelerate deployment cycles by 20%, integrating modern development tools and best practices.
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Box>

        {/* Experience 3 */}
        <Box id='past-experience-3' w='full' py={{ base: 6, md: '3em' }} px={{ base: 4, md: 8 }}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            // maxW={{ md: "1650px", lg: "1900px"}}
            maxW="1450px"
            mx="auto"
            align="flex-start"
            // spacing={{ base: 6, lg: 16 }}
            gap={{ md: '10em'}}
          >
            <Box minW={{ base: "100%", lg: "340px" }} maxW={{ base: "100%", lg: "340px" }}  mt={{ md: '-5px'}}>
              <Text fontSize={{ base: '2xl', md: '4xl' }}>Full Stack Engineer</Text>
              <Text fontSize={{ base: '2xl', md: '4xl' }}>Intern @ Fly.io</Text>
              <Text fontSize={{ base: 'md', md: 'xl' }} mt={'1em'}>May 2022 - August 2022</Text>
            </Box>
            <Box flex={1}>
              <Box fontSize={{ base: 'lg', md: '3xl' }} mb={2} mr={{ md: 20}}>
                Technologies: Elixir, Phoenix Liveview, JavaScript, Ruby, Go, Postgres, Docker, Flyctl, HTML5, TailwindCSS, Git, Github, Slack
              </Box>
              <UnorderedList spacing={3} textAlign={'start'} fontSize={{ base: 'md', md: 'lg' }}>
                {/* <ListItem>
                  Leveraged Phoenix LiveView to create real-time, interactive web applications, enhancing user engagement and reducing the need for client-side JavaScript.
                </ListItem> */}
                <ListItem>
                  Created reusable Elixir components, reducing dev time by 30% across multiple projects.
                </ListItem>
                <ListItem>
                  Enhanced frontend performance via lazy loading & asset optimizations, improving Lighthouse scores by 20%.
                </ListItem>
                <ListItem>
                  Built real-time interactive features using Phoenix LiveView and WebSockets, reducing frontend processing load by 40%.
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Box>
        <Box id='skills' w="full" pb={'1em'} pt={'1em'} px={{ base: 4, md: 8 }}>
        <Box>
          <Text textAlign={'left'} pl={{ base: 4, md: '3em' }} fontSize={{ base: '2xl', md: '4xl' }} pb={'0.5em'}>Skills</Text>
          <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='white'></Box>
          <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='black'></Box>
        </Box>
          <Center id='tech-stack-1' mt={'2em'}>
            <Flex wrap="wrap" justify="center" gap={{ base: 2, md: 4 }}>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/javascript/original.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/python/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/elixir/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/ruby/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/go/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/html5/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/css3/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/express/original.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/nodejs/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/react/original.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/redux/original.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/phoenix/original-wordmark.svg"></Image>
            </Flex>
          </Center>

          <Center id='tech-stack-2' py={'2em'}>
            <Flex wrap="wrap" justify="center" gap={{ base: 2, md: 4 }}>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/rails/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/postgresql/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/flask/original.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/sqlalchemy/original.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/sequelize/original.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/docker/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/amazonwebservices/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/tailwindcss/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/git/original.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/github/original-wordmark.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/heroku/original.svg"></Image>
              <Image boxSize={{ base: '60px', md: '100px' }} src="https://devicon-website.vercel.app/api/google/original.svg"></Image>
            </Flex>
          </Center>
        </Box>

        <Box id='projects' px={{ base: 4, md: 8 }}>
          <Text textAlign={'left'} pl={{ base: 4, md: '3em' }} fontSize={{ base: '2xl', md: '4xl' }} pb={'0.5em'}>Projects</Text>
          <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='white'></Box>
          <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='black'></Box>
        </Box>
        <Projects />
        <Box id='networks' w="full" py={{ base: 8, md: 12 }} px={{ base: 4, md: 8 }}>
        <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='white'></Box>
        <Box w={{ base: '90%', md: '90%' }} h={'2px'} ml={{ base: 4, md: '5.4em' }} bg='black' mb={'0.5em'}></Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-evenly"
            pt={'1em'}
            spacing={{ base: 6, md: 4 }}
            align="center"
          >
            <VStack>
              <Text fontSize={{ base: 'lg', md: '1.4em' }} fontWeight={'bold'}>Located In</Text>
              <Text pt={'0.5em'} fontSize={{ base: 'md', md: '1.2em' }}>Sacramento, CA</Text>
            </VStack>
            <VStack>
              <Text fontSize={{ base: 'lg', md: '1.4em' }} fontWeight={'bold'}>Networks</Text>
              <HStack pt={'1em'} spacing={4} wrap="wrap" justify="center">
                <Link href='https://github.com/chrisbh4'>
                  <Icon as={FaGithub} boxSize={{ base: 8, md: 12 }} />
                </Link>
                <Link href='https://www.linkedin.com/in/christian-brown-8770311ba/'>
                  <Icon as={FaLinkedin} boxSize={{ base: 8, md: 12 }} />
                </Link>
                <Link href="https://wellfound.com/profile/edit/overview">
                  <Icon as={FaAngellist} boxSize={{ base: 8, md: 12 }} />
                </Link>
                <Link href="mailto:chrismbh4@gmail.com">
                  <EmailIcon boxSize={{ base: 8, md: 12 }} />
                </Link>
              </HStack>
            </VStack>
            <VStack>
              <Text fontSize={{ base: 'lg', md: '1.4em' }} fontWeight={'bold'}>Resume</Text>
              <Link href="https://drive.google.com/file/d/1XufQ1mrhLEo0wNOf8UehETYVc2D9dvtO/view?usp=sharing">
                <Icon as={FaIdBadge} boxSize={{ base: 6, md: 9 }} mt={'1em'} />
              </Link>
            </VStack>
          </Stack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
