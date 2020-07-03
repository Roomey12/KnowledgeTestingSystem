#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["KTS.WEBAPI/KTS.WEBAPI.csproj", "KTS.WEBAPI/"]
COPY ["KTS.BLL/KTS.BLL.csproj", "KTS.BLL/"]
COPY ["KTS.DAL/KTS.DAL.csproj", "KTS.DAL/"]
RUN dotnet restore "KTS.WEBAPI/KTS.WEBAPI.csproj"
COPY . .
WORKDIR "/src/KTS.WEBAPI"
RUN dotnet build "KTS.WEBAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "KTS.WEBAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "KTS.WEBAPI.dll"]