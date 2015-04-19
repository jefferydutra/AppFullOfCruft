CREATE TABLE [dbo].[Hotels]
(
	[Id] NVARCHAR(300) NOT NULL PRIMARY KEY,
	Name nvarchar(max),
	Address nvarchar(max),
	Rating nvarchar(max),
	PlaceId nvarchar(max),
	Lattitude DECIMAL(9, 6),
	Longitude decimal(9,6)
)
