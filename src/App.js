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
    event.preventDefault(); // Prevent the default click behavior
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: "center"
        });
    }
}

  return (
    <ChakraProvider >
      {/*Main Body */}
      <Box textAlign="center" fontSize="xl" fontFamily={'Rajdhani'} >
        <Box id='nav' bg={"#393e61"} w="full" h="6em" position={'fixed'} zIndex={1} >
          <Flex justify={"space-between"} align={'center'} h={'full'} color={'white'}>
            <Text fontSize="5xl" ml={'8%'}>Christian Brown </Text>
            <Flex align='center' justify={'flex-end'} pr={'2%'} w={"50%"}>
              <Link href='#home' style={{ textDecoration: "none" }} onClick={(e) => handleClick(e, 'home')} fontWeight={'medium'} fontSize={'2xl'} ml={'5%'}   >Home</Link>
              <Link href='#past-experience' style={{ textDecoration: "none" }} onClick={(e) => handleClick(e, 'past-experience')}  fontWeight={'medium'} fontSize={'2xl'} ml={'5%'} wrap>Past Experiences</Link>
              <Link href='#skills' style={{ textDecoration: "none" }} onClick={(e) => handleClick(e, 'skills')}  fontWeight={'medium'} fontSize={'2xl'} ml={'5%'}>Skills</Link>
              <Link href='#projects' style={{ textDecoration: "none" }} onClick={(e) => handleClick(e, 'projects')}  fontWeight={'medium'} fontSize={'2xl'} ml={'5%'}>Projects</Link>
              <Link href='https://drive.google.com/file/d/1gpyoVOsSxv3-_UVJFkXbLVhXUVkpV6Ez/view?usp=sharing' style={{ textDecoration: "none" }}
                    fontWeight={'medium'} fontSize={'2xl'} ml={'5%'}
                >Resume
              </Link>
              <ColorModeSwitcher ml={'5%'} justifySelf="flex-end" _hover={{bg: "hidden"}} />
            </Flex>
          </Flex>
        </Box>
        <Box id='home' bg={"#13d7a2"} w="full" h="600px" pt={'8em'} pb={'3em'} >
          <Flex justify={'center'}>
            <Box boxSize='300px'>
              <Image
                src='https://imgur.com/N3BB4kx.png'
                alt='Christian Brown'
                borderRadius={'2xl'}
              />
            </Box>
            <VStack pt={'1em'} ml={'8em'}>
              <Text fontSize={'5xl'} w={'80%'}  >
                Hi, my name is Chrsitian Brown.
              </Text>
               <Text fontSize={'5xl'} w={'80%'}  >
                 I'm a Software Engineer from Sacramento, CA.
              </Text>
               {/* <Text fontSize={'xl'} w={'80%'}  >
                (Best viewed on Google Chrome)
              </Text> */}
              <Flex justify={'center'} align={'center'} pt={'1em'}>
                <Link href="https://github.com/chrisbh4">
                  <Icon as={FaGithub} boxSize={12} mr={'1em'} />
                </Link>
                <Link href="https://www.linkedin.com/in/christian-brown-8770311ba/">
                  <Icon as={FaLinkedin} boxSize={12} mr={'1em'} />
                </Link>
                <Link href="https://wellfound.com/profile/edit/overview">
                  <Icon as={FaAngellist} boxSize={12} mr={'1em'} />
                </Link>
                <Link href="https://drive.google.com/file/d/1gpyoVOsSxv3-_UVJFkXbLVhXUVkpV6Ez/view?usp=sharing">
                  <Icon as={FaIdBadge} boxSize={12} mr={'1em'} />
                </Link>
                <Link href="mailto:chrismbh4@gmail.com">
                  <EmailIcon boxSize={12} />
                </Link>
              </Flex>
            </VStack>
          </Flex>
        </Box>
        <Box id='about' w="full" h="400px" mt={'1.5em'}  >
        <Box>
          <Text textAlign={'left'} pl={'3em'} fontSize={'4xl'} pb={'0.5em'}>About</Text>
          <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='white'></Box>
          <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='black'></Box>
        </Box>
          <Flex justify='center' align={'center'} fontSize={'2xl'} pt={'1.5em'}>
            <Box w={'35%'}  pb={'3em'}>
              <Text align={'start'}>Before deep diving into software development, I attended Bacone College in Oklahoma on a basketball scholarship.
                During my free time I enjoy playing basketball, cooking new recipes, and leveling up my coding skills.
              </Text>
            </Box>
            {/* <Box w={'35%'} pt={'3em'}> */}
            <Box w={'35%'} pl={'1em'}>
              <Text align={'start'}>Ever since I've built my first full stack application my passion for code has sky rocketed. I've always enjoyed working with new tech or
                    just build new apps ideas that just randomly pop into my head. I thrive working in a fast-pace enviorment that requires goal oriented communication.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box id='past-experience'>
          <Text textAlign={'left'} pl={'3em'} fontSize={'4xl'} pb={'0.5em'} mt={'2.5em'}>Past Experience</Text>
          <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='white'></Box>
          <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='black'></Box>
        </Box>
        <Box id='past-experience-1' h={'520px'} w='full'>
          <Flex justify={'space-evenly'} >
            <Box w='full'>
              <Box mt='3em' mr={'12em'}>
                <Text fontSize={'4xl'}>Full Stack Engineer </Text>
                <Text fontSize={'4xl'} mr={'4.9em'}>@ Fly.io</Text>
                <Text fontSize={'xl'} mt={'1em'} mr={'5em'}>August 2022 - Current</Text>
              </Box>

            </Box>
            <Box fontSize={'25px'} >
                <Box w='90%' fontSize={'3xl'} mr={'10em'} mt={'2.2em'} textAlign={'left'}>
                  Technologies : Elixir, Phoenix Liveview, JavaScript, Ruby, Go, Postgres, Docker, Flyctl, HTML5, TailwindCSS, Git, Github, Slack
                </Box>
              <UnorderedList id='experience-1' >
                <ListItem w='83%' mt={'1em'} mr={'1em'} textAlign={'left'}>
                  Architected complex database schemas and queries in PostgreSQL,<br></br>  ensuring data integrity and efficient data retrieval
                </ListItem>
                <ListItem w='90%' mt={'1em'} textAlign={'left'}>
                  Restructured and implemented an upgraded OAuth authentication system, enhancing application security and improving
                  user authentication experience by 30%.
                </ListItem>
                <ListItem w='90%' mt={'1em'}textAlign={'left'}>
                  Collaborated with frontend and backend teams to architect and implement RESTful and GraphQL APIs,
                  ensuring smooth integration and data consistency.
                </ListItem>
                <ListItem w='83%' mt={'1em'}textAlign={'left'}>
                  Engineered scalable Ruby applications, optimizing performance and ensuring robustness for high-traffic scenarios.
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
        <Box id='past-experience-2' h={'600px'} w='full' mt={'10em'}>
          <Flex justify={'space-evenly'} >
            <Box w='full'>
              <Box mt='3em' mr={'12em'}>
              {/* <Text fontSize={'4xl'} textAlign={'start'}>Full Stack Engineer <br></br>Intern @ Fly.io </Text> */}
                <Text fontSize={'4xl'}>Full Stack Engineer </Text>
                <Text fontSize={'4xl'} mr={'2em'}>Intern @ Fly.io</Text>
                <Text fontSize={'xl'} mt={'1em'} mr={'4em'}>May 2022 - August 2022</Text>
              </Box>

            </Box>
            <Box fontSize={'25px'} p={'2em'} >
                <Box w='90%' fontSize={'3xl'} mr={'9em'} textAlign={'left'} mt={'0.5em'} >
                  Technologies : Elixir, Phoenix Liveview, Ruby, JavaScript, Postgres, Docker, Flyctl, HTML5, TailwindCSS, Git, Github, Slack
                </Box>
              <UnorderedList id='experience-2' mt={'1em'} textAlign={'left'} >
                <ListItem w='85%' >
                  Leveraged Phoenix LiveView to create real-time, interactive web applications, enhancing user
                  engagement and reducing the need for client-side JavaScript.
                </ListItem>
                <ListItem w='78%' textAlign={'left'} mt={'1em'} >
                  Built reusable Elixir libraries and components, speeding up development cycles and ensuring consistent
                  functionality across projects.
                </ListItem>
                <ListItem w='80%' textAlign={'left'} mt={'1em'} >
                  Participated in code reviews and provided feedback to other developers, helping to improve code quality
                  and maintainability
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
        <Box id='skills' w="full" h="auto" pb={'1em'} pt={'1em'} >
        <Box>
          <Text textAlign={'left'} pl={'3em'} fontSize={'4xl'} pb={'0.5em'}>Skills</Text>
          <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='white'></Box>
          <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='black'></Box>
        </Box>
          <Center id='tech-stack-1' mt={'2em'}>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/javascript/original.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/python/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/elixir/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/ruby/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/go/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/html5/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/css3/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/express/original.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/nodejs/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/react/original.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/redux/original.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/phoenix/original-wordmark.svg"></Image>
          </Center>

          <Center id='tech-stack-2' py={'2em'}>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/rails/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/postgresql/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/flask/original.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/sqlalchemy/original.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/sequelize/original.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/docker/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/amazonwebservices/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/tailwindcss/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/git/original.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/github/original-wordmark.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/heroku/original.svg"></Image>
            <Image boxSize={'100px'} mr={'15px'} src="https://devicon-website.vercel.app/api/google/original.svg"></Image>
          </Center>
          <Flex></Flex>
        </Box>

        {/* <Box bg={"green.600"} w="full" h="200px" >
          <Center id='contact' fontSize="4xl">Contact Form</Center>
        </Box> */}
        <Box id='projects' >
          <Text textAlign={'left'} pl={'3em'} fontSize={'4xl'} pb={'0.5em'}>Projects</Text>
          <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='white'></Box>
          <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='black'></Box>
        </Box>
        <Projects />
        <Box id='networks' w="full" h="200px" >
        <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='white'></Box>
        <Box w={'90%'} h={'2px'} ml={'5.4em'} bg='black' mb={'0.5em'}></Box>
          <Flex justify="space-evenly" pt={'1em'}>
            <VStack>
              <Text fontSize={'1.4em'} fontWeight={'bold'}>Located In</Text>
              <Text pt={'0.5em'} fontSize={'1.2em'} >Sacrmaento, CA</Text>
            </VStack>
            <VStack mr={'4em'}>
              <Text fontSize={'1.4em'} fontWeight={'bold'}>Networks</Text>
              <Flex pt={'1em'}>
                <Link href='https://github.com/chrisbh4' mr={'0.4em'}>
                  <Icon as={FaGithub} boxSize={12} />
                </Link>
                <Link href='https://www.linkedin.com/in/christian-brown-8770311ba/'>
                  <Icon as={FaLinkedin} boxSize={12} mr={'0.4em'}/>
                </Link>
                <Link href="https://wellfound.com/profile/edit/overview">
                  <Icon as={FaAngellist} boxSize={12} mr={'0.4em'}/>
                </Link>
                <Link href="mailto:chrismbh4@gmail.com">
                  <EmailIcon boxSize={12} mr={'0.4em'}/>
                </Link>
              </Flex>
            </VStack>
            <VStack>
              <Text fontSize={'1.4em'} fontWeight={'bold'}>Resume</Text>
              <Link href="https://drive.google.com/file/d/1gpyoVOsSxv3-_UVJFkXbLVhXUVkpV6Ez/view?usp=sharing">
                <Icon as={FaIdBadge} boxSize={9} mt={'1em'} />
              </Link>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
