name := """video-store"""

version := "0.9"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"
PlayKeys.externalizeResources := false

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs,
  "org.postgresql" % "postgresql" % "9.4-1206-jdbc42",
  javaJpa,
  "org.hibernate" % "hibernate-entitymanager" % "5.1.4.Final",
  "org.mindrot" % "jbcrypt" % "0.3m"
)

libraryDependencies += evolutions
libraryDependencies += filters
fork in run := true
