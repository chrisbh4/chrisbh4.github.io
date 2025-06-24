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
              <Link href='https://drive.google.com/file/d/1jjcvTvRAx2JS48Z5sOGADXt5JNde7aIn/view?usp=sharing' style={{ textDecoration: "none" }}
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
                <Link href="https://drive.google.com/file/d/1jjcvTvRAx2JS48Z5sOGADXt5JNde7aIn/view?usp=sharing">
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
              <Text align={'start'}>Before deep diving into software development, I attended Bacone College in Oklahoma on a basketball scholarship.
                During my free time I enjoy playing basketball, cooking new recipes, and leveling up my coding skills.
              </Text>
            </Box>
            <Box w={{ base: '100%', md: '90%' }}>
              <Text align={'start'}>Ever since I've built my first full stack application my passion for code has sky rocketed. I've always enjoyed working with new tech or
                    just build new apps ideas that just randomly pop into my head. I thrive working in a fast-pace enviorment that requires goal oriented communication.
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
              <Text fontSize={{ base: '2xl', md: '4xl' }}>@ Freelance</Text>
              <Text fontSize={{ base: 'md', md: 'xl' }} mt={'1em'}>January 2020 - current</Text>
            </Box>
            <Box flex={1}>
              <Box fontSize={{ base: 'lg', md: '3xl' }} mb={2} mr={{ md: 30}}>
                Technologies: JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, GraphQL, Vercel, Microsoft Azure, Docker, MS SQL Server, GitHub
              </Box>
              <UnorderedList spacing={3} textAlign={'start'} fontSize={{ base: 'md', md: 'lg' }}>
                <ListItem>
                  Architected scalable full-stack solutions using JavaScript, TypeScript, REST and GraphQL APIs, reducing API response times by up to 40%.
                </ListItem>
                <ListItem>
                  Deployed applications to Vercel and Azure, utilizing CI/CD pipelines and environment configs to streamline releases and maintain 99.9% uptime.
                </ListItem>
                <ListItem>
                  Delivered production-ready interfaces styled with Tailwind CSS, ensuring mobile-first responsiveness and WCAG 2.1 accessibility compliance.
                </ListItem>
                <ListItem>
                  Consulted on technical architecture, tooling, and best practices for mid-sized engineering teams to ensure scalable and maintainable codebases.
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
              <Text fontSize={{ base: 'md', md: 'xl' }} mt={'1em'}>August 2022 - September 2025</Text>
            </Box>
            <Box flex={1}>
              <Box fontSize={{ base: 'lg', md: '3xl' }} mb={2} mr={{ md: 20}}>
                Technologies: Elixir, Phoenix Liveview, JavaScript, Ruby, Go, Postgres, Docker, Flyctl, HTML5, TailwindCSS, Git, Github, Slack
              </Box>
              <UnorderedList spacing={3} textAlign={'start'} fontSize={{ base: 'md', md: 'lg' }}>
                <ListItem>
                  Architected complex database schemas and queries in PostgreSQL, ensuring data integrity and efficient data retrieval
                </ListItem>
                <ListItem>
                  Restructured and implemented an upgraded OAuth authentication system, enhancing application security and improving user authentication experience by 30%.
                </ListItem>
                <ListItem>
                  Collaborated with frontend and backend teams to architect and implement RESTful and GraphQL APIs, ensuring smooth integration and data consistency.
                </ListItem>
                <ListItem>
                  Engineered scalable Ruby applications, optimizing performance and ensuring robustness for high-traffic scenarios.
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
                <ListItem>
                  Leveraged Phoenix LiveView to create real-time, interactive web applications, enhancing user engagement and reducing the need for client-side JavaScript.
                </ListItem>
                <ListItem>
                  Built reusable Elixir libraries and components, speeding up development cycles and ensuring consistent functionality across projects.
                </ListItem>
                <ListItem>
                  Participated in code reviews and provided feedback to other developers, helping to improve code quality and maintainability
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
              <Link href="https://drive.google.com/file/d/1jjcvTvRAx2JS48Z5sOGADXt5JNde7aIn/view?usp=sharing">
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
