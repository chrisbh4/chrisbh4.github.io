import React, { useEffect } from 'react';
import '@fontsource/kanit/500.css';
import '@fontsource/rajdhani';
import {
  Box,
  ChakraProvider,
  Flex,
  Text,
  Link,
  Image,
  VStack,
  HStack,
  Icon,
  Container,
  useColorModeValue,
  Button,
  Stack,
  Grid,
  GridItem,
  Center,
  UnorderedList,
  ListItem,
  IconButton,
  Tooltip,
  useBreakpointValue,
  motion,
  keyframes
} from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
  FaAngellist,
  FaIdBadge,
  FaArrowDown,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaExternalLinkAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { motion as framerMotion } from 'framer-motion';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { EmailIcon } from '@chakra-ui/icons';
import Projects from './components/Projects';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #00ff9d, 0 0 10px #00ff9d, 0 0 15px #00ff9d; }
  50% { box-shadow: 0 0 10px #00ff9d, 0 0 20px #00ff9d, 0 0 30px #00ff9d; }
  100% { box-shadow: 0 0 5px #00ff9d, 0 0 10px #00ff9d, 0 0 15px #00ff9d; }
`;

const MotionBox = framerMotion(Box);
const MotionFlex = framerMotion(Flex);
const MotionStack = framerMotion(Stack);
const MotionGrid = framerMotion(Grid);
const MotionText = framerMotion(Text);
const MotionHeading = framerMotion(Text);

// Create a separate component for the main content
function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Futuristic color scheme
  const bgColor = useColorModeValue('#0a0a0a', '#0a0a0a');
  const textColor = useColorModeValue('#ffffff', '#ffffff');
  const accentColor = useColorModeValue('#00ff9d', '#00ff9d');
  const secondaryAccent = useColorModeValue('#ff00ff', '#ff00ff');
  const cardBg = useColorModeValue('rgba(20, 20, 20, 0.8)', 'rgba(20, 20, 20, 0.8)');
  const borderColor = useColorModeValue('rgba(0, 255, 157, 0.2)', 'rgba(0, 255, 157, 0.2)');
  const gradientStart = useColorModeValue('#00ff9d', '#00ff9d');
  const gradientEnd = useColorModeValue('#ff00ff', '#ff00ff');

  const skillCardStyle = {
    transition: 'all 0.2s',
    _hover: {
      borderColor: accentColor,
      boxShadow: `0 0 20px rgba(0, 255, 157, 0.2)`,
    }
  };

  const imageStyle = {
    transition: 'all 0.2s',
    _hover: {
      filter: 'brightness(0) invert(1) sepia(1) saturate(1000%) hue-rotate(70deg)'
    }
  };

  function handleClick(event, id) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }

  return (
    <Box
      bg={bgColor}
      color={textColor}
      minH="100vh"
      fontFamily="Rajdhani"
      position="relative"
      overflow="hidden"
    >
      {/* Futuristic Navigation */}
      <MotionBox
        as="nav"
        position="fixed"
        w="full"
        zIndex={1000}
        bg="rgba(10, 10, 10, 0.85)"
        backdropFilter="blur(10px)"
        borderBottom="1px"
        borderColor={borderColor}
        py={4}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <MotionText
              as="h1"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              CB
            </MotionText>

            {/* Desktop Navigation */}
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              {['home', 'about', 'experience', 'skills', 'projects'].map((item) => (
                <MotionBox
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`#${item}`}
                    onClick={(e) => handleClick(e, item)}
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{ color: accentColor }}
                    transition="color 0.2s"
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '-2px',
                      left: '0',
                      bg: accentColor,
                      transition: 'width 0.3s ease-in-out',
                    }}
                    _hover={{
                      _after: {
                        width: '100%',
                      },
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </MotionBox>
              ))}
              <Button
                as="a"
                href="https://drive.google.com/file/d/1jjcvTvRAx2JS48Z5sOGADXt5JNde7aIn/view?usp=sharing"
                target="_blank"
                variant="outline"
                borderColor={accentColor}
                color={accentColor}
                _hover={{
                  bg: accentColor,
                  color: bgColor,
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s"
              >
                Resume
              </Button>
              {/* Light & Dark mode switch */}
              {/* <ColorModeSwitcher /> */}
            </HStack>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Menu"
              icon={isMenuOpen ? <FaTimes /> : <FaBars />}
              variant="ghost"
              color={accentColor}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </Flex>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <MotionBox
              display={{ base: 'block', md: 'none' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              mt={4}
              p={4}
              bg={cardBg}
              borderRadius="lg"
              border="1px"
              borderColor={borderColor}
            >
              <VStack spacing={4} align="stretch">
                {['home', 'about', 'experience', 'skills', 'projects'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => handleClick(e, item)}
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{ color: accentColor }}
                    transition="color 0.2s"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
                <Button
                  as="a"
                  href="https://drive.google.com/file/d/1jjcvTvRAx2JS48Z5sOGADXt5JNde7aIn/view?usp=sharing"
                  target="_blank"
                  variant="outline"
                  borderColor={accentColor}
                  color={accentColor}
                  _hover={{
                    bg: accentColor,
                    color: bgColor,
                  }}
                >
                  Resume
                </Button>
              </VStack>
            </MotionBox>
          )}
        </Container>
      </MotionBox>

      {/* Hero Section */}
      <Box id="home" minH="80vh" pt={{ base: "120px", md: "100px" }} position="relative">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
            gap={12}
            alignItems="center"
          >
            <GridItem>
              <MotionStack
                spacing={6}
                initial="hidden"
                animate="visible"
                variants={slideIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <MotionText
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl" }}
                  fontWeight="bold"
                  bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
                  bgClip="text"
                  variants={scaleIn}
                >
                  Christian Brown
                </MotionText>
                <MotionText
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color={textColor}
                  fontWeight="medium"
                  variants={fadeIn}
                >
                  Full Stack Software Engineer
                </MotionText>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  color="gray.400"
                  variants={fadeIn}
                >
                  Building the future with cutting-edge technologies
                </MotionText>
                <MotionStack
                  direction={{ base: "column", sm: "row" }}
                  spacing={4}
                  pt={4}
                  variants={fadeIn}
                >
                  <Button
                    as="a"
                    href="#projects"
                    bg={accentColor}
                    color={bgColor}
                    size="lg"
                    rightIcon={<FaArrowDown />}
                    onClick={(e) => handleClick(e, 'projects')}
                    _hover={{
                      bg: 'transparent',
                      color: accentColor,
                      border: `2px solid ${accentColor}`,
                      transform: 'translateY(-2px)',
                      animation: `${glowAnimation} 2s infinite`,
                    }}
                    transition="all 0.2s"
                  >
                    View Projects
                  </Button>
                  <Button
                    as="a"
                    href="mailto:chrismbh4@gmail.com"
                    variant="outline"
                    borderColor={accentColor}
                    color={accentColor}
                    size="lg"
                    leftIcon={<EmailIcon />}
                    _hover={{
                      bg: accentColor,
                      color: bgColor,
                      transform: 'translateY(-2px)',
                      animation: `${glowAnimation} 2s infinite`,
                    }}
                    transition="all 0.2s"
                  >
                    Contact Me
                  </Button>
                </MotionStack>
                <HStack spacing={6} pt={4}>
                  {[
                    { icon: FaGithub, href: 'https://github.com/chrisbh4', label: 'GitHub' },
                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/christian-brown-8770311ba/', label: 'LinkedIn' },
                    { icon: FaAngellist, href: 'https://wellfound.com/profile/edit/overview', label: 'Wellfound' }
                  ].map((social) => (
                    <Tooltip key={social.label} label={social.label}>
                      <IconButton
                        as="a"
                        href={social.href}
                        target="_blank"
                        aria-label={social.label}
                        icon={<Icon as={social.icon} />}
                        variant="ghost"
                        size="lg"
                        fontSize="20px"
                        color={accentColor}
                        _hover={{
                          color: secondaryAccent,
                          transform: 'translateY(-2px)',
                          animation: `${glowAnimation} 2s infinite`,
                        }}
                      />
                    </Tooltip>
                  ))}
                </HStack>
              </MotionStack>
            </GridItem>
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                maxW={{ base: "250px", md: "350px" }}
                mx="auto"
              >
                <Image
                  src="https://imgur.com/N3BB4kx.png"
                  alt="Christian Brown"
                  borderRadius="2xl"
                  boxShadow={`0 0 30px rgba(0, 255, 157, 0.1)`}
                />
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" py={20} bg={cardBg} position="relative">
        <Container maxW="container.xl">
          <MotionStack
            spacing={8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              About Me
            </MotionText>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={8}
              alignItems="center"
            >
              <GridItem>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  lineHeight="tall"
                  variants={fadeIn}
                >
                  Before I fell into the rabbit hole of tech, I was a collegiate athlete with a full ride basketball scholarship at Bacone College. Being a high level athlete gave me the mindset to stay disciplined, and keep growing daily. Those habits carried me to where I am today as a software engieer.
                </MotionText>
              </GridItem>
              <GridItem>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  lineHeight="tall"
                  variants={fadeIn}
                >
                  I got hooked on software the moment my first blog page came to life. Since then, I’ve been driven by new ideas, new challenges, and building things that matter. When I’m not coding, I’m either in the gym, on the basketball court, cooking, or tinkering with new tech
                </MotionText>
              </GridItem>
            </Grid>
          </MotionStack>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box id="experience" py={20} bg={bgColor} position="relative">
        <Container maxW="container.xl">
          <MotionStack
            spacing={12}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              Experience
            </MotionText>

            {/* Experience Cards */}
            <Stack spacing={8}>
              {/* Stealth Startup Experience */}
              <MotionBox
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow={`0 4px 20px rgba(0, 255, 157, 0.1)`}
                border="1px"
                borderColor={borderColor}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px rgba(0, 255, 157, 0.15)`,
                  borderColor: accentColor,
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition={{ duration: 0.3 }}
              >
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                  <GridItem>
                    <VStack align="start" spacing={2}>
                      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">Full Stack Software Engineer</Text>
                      <Text fontSize={{ base: "xl", md: "2xl" }} color={accentColor}>@ Stealth Startup</Text>
                      <Text color="gray.400">September 2024 - Present</Text>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <Stack spacing={4}>
                      <Flex wrap="wrap" gap={2}>
                        {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL', 'LangChain', 'Vercel', 'Azure', 'Docker'].map((tech) => (
                          <Box
                            key={tech}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg="rgba(0, 255, 157, 0.1)"
                            color={accentColor}
                            fontSize="sm"
                            fontWeight="medium"
                          >
                            {tech}
                          </Box>
                        ))}
                      </Flex>
                      <UnorderedList spacing={2} color="gray.300">
                        <ListItem>Developed scalable full-stack solutions using JavaScript, TypeScript, and REST/GraphQL APIs, which aligned with best practices in full stack and web architecture and reduced API response times by up to 40%.</ListItem>
                        <ListItem>Built autonomous AI agents using JavaScript and Langchain.js to automate research, web scraping, and document understanding workflows across logistic applications.</ListItem>
                        <ListItem>Monitored AI agent behavior using logging middleware and custom analytics, iterating on tool strategies and prompt designs to reduce hallucination rates by 25%.</ListItem>
                        <ListItem>Collaborated with mid-sized engineering teams as a technical consultant, enhancing project architecture and tooling decisions for scalable and maintainable codebases.</ListItem>
                        <ListItem>Integrated and maintained SQL Server databases, crafting optimized queries and stored procedures to support real-time reporting and back-end performance.</ListItem>
                      </UnorderedList>
                    </Stack>
                  </GridItem>
                </Grid>
              </MotionBox>

              {/* Fly.io Experience */}
              <MotionBox
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow={`0 4px 20px rgba(0, 255, 157, 0.1)`}
                border="1px"
                borderColor={borderColor}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px rgba(0, 255, 157, 0.15)`,
                  borderColor: accentColor,
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition={{ duration: 0.3 }}
              >
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                  <GridItem>
                    <VStack align="start" spacing={2}>
                      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">Full Stack Software Engineer</Text>
                      <Text fontSize={{ base: "xl", md: "2xl" }} color={accentColor}>@ Fly.io</Text>
                      <Text color="gray.400">August 2022 - September 2024</Text>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <Stack spacing={4}>
                      <Flex wrap="wrap" gap={2}>
                        {['Elixir', 'Phoenix Liveview', 'JavaScript', 'Ruby', 'Go', 'Postgres', 'TailwindCSS', 'Docker', 'FlyCTL'].map((tech) => (
                          <Box
                            key={tech}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg="rgba(0, 255, 157, 0.1)"
                            color={accentColor}
                            fontSize="sm"
                            fontWeight="medium"
                          >
                            {tech}
                          </Box>
                        ))}
                      </Flex>
                      <UnorderedList spacing={2} color="gray.300">
                        <ListItem>Engineered and maintained RESTful APIs and GraphQL endpoints in line with modern web architecture to optimize data retrieval speed by 25%.</ListItem>
                        <ListItem>Developed a custom OAuth2 authentication system (using JWT & SSO) to enhance security protocols and reduce login failures by 30%, supporting robust API integration.</ListItem>
                        <ListItem>Constructed scalable Ruby microservices integrated with Redis caching, achieving a 40% improvement in request handling efficiency and aligning with microservices architecture principles.</ListItem>
                        <ListItem>Optimized PostgreSQL database queries under high traffic conditions to enhance overall application performance, showcasing expertise in full stack development and data management.</ListItem>
                        <ListItem>Established automated CI/CD pipelines with GitHub Actions and Docker to facilitate reliable testing and accelerate deployment cycles by 20%, integrating modern development tools and best practices.</ListItem>
                      </UnorderedList>
                    </Stack>
                  </GridItem>
                </Grid>
              </MotionBox>

              {/* Fly.io internship Experience */}
              <MotionBox
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow={`0 4px 20px rgba(0, 255, 157, 0.1)`}
                border="1px"
                borderColor={borderColor}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px rgba(0, 255, 157, 0.15)`,
                  borderColor: accentColor,
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition={{ duration: 0.3 }}
              >
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                  <GridItem>
                    <VStack align="start" spacing={2}>
                      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">Full Stack Software Engineer Intern</Text>
                      <Text fontSize={{ base: "xl", md: "2xl" }} color={accentColor}>@ Fly.io</Text>
                      <Text color="gray.400">May 2022 - August 2022</Text>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <Stack spacing={4}>
                      <Flex wrap="wrap" gap={2}>
                        {['Elixir', 'Phoenix Liveview', 'JavaScript', 'Ruby', 'Go', 'Postgres', 'TailwindCSS', 'Docker', 'FlyCTL'].map((tech) => (
                          <Box
                            key={tech}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg="rgba(0, 255, 157, 0.1)"
                            color={accentColor}
                            fontSize="sm"
                            fontWeight="medium"
                          >
                            {tech}
                          </Box>
                        ))}
                      </Flex>
                      <UnorderedList spacing={2} color="gray.300">
                        <ListItem>Created reusable Elixir components, reducing dev time by 30% across multiple projects.</ListItem>
                        <ListItem>Enhanced frontend performance via lazy loading & asset optimizations, improving Lighthouse scores by 20%.</ListItem>
                        <ListItem>Built real-time interactive features using Phoenix LiveView and WebSockets, reducing frontend processing load by 40%.</ListItem>
                      </UnorderedList>
                    </Stack>
                  </GridItem>
                </Grid>
              </MotionBox>
            </Stack>
          </MotionStack>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" py={20} bg={cardBg} position="relative">
        <Container maxW="container.xl">
          <MotionStack
            spacing={12}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              Skills & Technologies
            </MotionText>

            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
              gap={6}
            >
              {[
                { name: 'JavaScript', icon: 'https://devicon-website.vercel.app/api/javascript/plain.svg' },
                { name: 'Python', icon: 'https://devicon-website.vercel.app/api/python/plain.svg' },
                { name: 'Elixir', icon: 'https://devicon-website.vercel.app/api/elixir/plain.svg' },
                { name: 'Ruby', icon: 'https://devicon-website.vercel.app/api/ruby/plain-wordmark.svg' },
                { name: 'Go', icon: 'https://devicon-website.vercel.app/api/go/original-wordmark.svg' },
                { name: 'HTML5', icon: 'https://devicon-website.vercel.app/api/html5/plain-wordmark.svg' },
                { name: 'CSS3', icon: 'https://devicon-website.vercel.app/api/css3/plain-wordmark.svg' },
                { name: 'React', icon: 'https://devicon-website.vercel.app/api/react/original.svg' },
                { name: 'Redux', icon: 'https://devicon-website.vercel.app/api/redux/original.svg' },
                { name: 'Express', icon: 'https://devicon-website.vercel.app/api/express/original.svg' },
                { name: 'Node.js', icon: 'https://devicon-website.vercel.app/api/nodejs/original.svg' },
                { name: 'Pug.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pug/pug-plain.svg' },
                { name: 'Phoenix LiveView', icon: 'https://devicon-website.vercel.app/api/phoenix/plain.svg' },
                { name: 'Rails', icon: 'https://devicon-website.vercel.app/api/rails/plain-wordmark.svg' },
                { name: 'PostgreSQL', icon: 'https://devicon-website.vercel.app/api/postgresql/plain.svg' },
                { name: 'Flask', icon: 'https://devicon-website.vercel.app/api/flask/original.svg' },
                { name: 'SQLAlchemy', icon: 'https://devicon-website.vercel.app/api/sqlalchemy/original.svg' },
                { name: 'Sequelize', icon: 'https://devicon-website.vercel.app/api/sequelize/plain.svg' },
                { name: 'Docker', icon: 'https://devicon-website.vercel.app/api/docker/plain.svg' },
                { name: 'AWS', icon: 'https://devicon-website.vercel.app/api/amazonwebservices/original-wordmark.svg' },
                { name: 'Tailwind CSS', icon: 'https://devicon-website.vercel.app/api/tailwindcss/plain.svg' },
                { name: 'Git', icon: 'https://devicon-website.vercel.app/api/git/original.svg' },
                { name: 'GitHub', icon: 'https://devicon-website.vercel.app/api/github/original.svg' },
                { name: 'Heroku', icon: 'https://devicon-website.vercel.app/api/heroku/original.svg' },
                { name: 'Google Cloud', icon: 'https://devicon-website.vercel.app/api/googlecloud/original.svg' }
              ].map((tech) => (
                <MotionBox
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <VStack
                    p={4}
                    bg={bgColor}
                    borderRadius="xl"
                    border="1px"
                    borderColor={borderColor}
                    {...skillCardStyle}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      boxSize={{ base: '50px', md: '70px' }}
                      filter="brightness(0) invert(1)"
                      {...imageStyle}
                    />
                    <Text fontSize="sm" color="gray.400 bold">{tech.name}</Text>
                  </VStack>
                </MotionBox>
              ))}
            </Grid>
          </MotionStack>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" py={20} bg={bgColor} position="relative">
        <Container maxW="container.2xl">
          <MotionStack
            spacing={12}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              Featured Projects
            </MotionText>
            <Projects />
          </MotionStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20} bg={cardBg} position="relative">
        <Container maxW="container.xl">
          <MotionStack
            spacing={8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            align="center"
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              Let's Connect
            </MotionText>
            <Text fontSize={{ base: "lg", md: "xl" }} textAlign="center" maxW="2xl" color="gray.300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </Text>
            <MotionStack
              direction={{ base: "column", sm: "row" }}
              spacing={6}
              pt={4}
              variants={fadeIn}
            >
              <Button
                as="a"
                href="mailto:chrismbh4@gmail.com"
                size="lg"
                bg={accentColor}
                color={bgColor}
                leftIcon={<EmailIcon />}
                _hover={{
                  bg: 'transparent',
                  color: accentColor,
                  border: `2px solid ${accentColor}`,
                  transform: 'translateY(-2px)',
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition="all 0.2s"
              >
                Email Me
              </Button>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1jjcvTvRAx2JS48Z5sOGADXt5JNde7aIn/view?usp=sharing"
                target="_blank"
                size="lg"
                variant="outline"
                borderColor={accentColor}
                color={accentColor}
                rightIcon={<FaExternalLinkAlt />}
                _hover={{
                  bg: accentColor,
                  color: bgColor,
                  transform: 'translateY(-2px)',
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition="all 0.2s"
              >
                View Resume
              </Button>
            </MotionStack>
          </MotionStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        py={8}
        borderTop="1px"
        borderColor={borderColor}
        bg={bgColor}
      >
        <Container maxW="container.xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            spacing={4}
          >
            <Text color="gray.400">© 2024 Christian Brown. All rights reserved.</Text>
            <HStack spacing={6}>
              {[
                { icon: FaGithub, href: 'https://github.com/chrisbh4', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/christian-brown-8770311ba/', label: 'LinkedIn' },
                { icon: FaAngellist, href: 'https://wellfound.com/profile/edit/overview', label: 'Wellfound' }
              ].map((social) => (
                <Tooltip key={social.label} label={social.label}>
                  <IconButton
                    as="a"
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    icon={<Icon as={social.icon} />}
                    variant="ghost"
                    size="lg"
                    fontSize="20px"
                    color={accentColor}
                    _hover={{
                      color: secondaryAccent,
                      transform: 'translateY(-2px)',
                      animation: `${glowAnimation} 2s infinite`,
                    }}
                  />
                </Tooltip>
              ))}
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

// Main App component
function App() {
  return (
    <ChakraProvider>
      <AppContent />
    </ChakraProvider>
  );
}

export default App;
