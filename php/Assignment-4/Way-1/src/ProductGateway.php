<?php

class ProductGateway
{
    private PDO $conn;
    
    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();
    }
    
    public function getAll(): array
    {
        $sql = "SELECT * FROM api;";
        $stmt = $this->conn->query($sql);
        
        $data = array();
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            
            array_push($data, $row);
        }
        
        return $data;
    }
    
    public function create(array $data): string
    {
          
        $sql = "INSERT INTO  api (movie,rating)
        VALUES (:movie, :rating)";

        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":movie", $data["movie"], PDO::PARAM_STR);
        $stmt->bindValue(":rating", $data["rating"] ?? 0, PDO::PARAM_INT);
        
        $stmt->execute();
        
        return $this->conn->lastInsertId();
    }
    
    public function get(string $id): array | false
    {
        $sql = "SELECT *
                FROM api
                WHERE id = :id";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":id", $id, PDO::PARAM_INT);
        
        $stmt->execute();
        
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        
        return $data;
    }
    
    public function update(array $current, array $new): int
    {
        $sql = "UPDATE api
                SET movie = :movie, rating = :rating
                WHERE id = :id";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":movie", $new["movie"] ?? $current["movie"], PDO::PARAM_STR);
        $stmt->bindValue(":rating", $new["rating"] ?? $current["rating"], PDO::PARAM_INT);
        
        $stmt->bindValue(":id", $current["id"], PDO::PARAM_INT);
        
        $stmt->execute();
        
        return $stmt->rowCount();
    }
    
    public function delete(string $id): int
    {
        $sql = "DELETE FROM api
                WHERE id = :id";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":id", $id, PDO::PARAM_INT);
        
        $stmt->execute();
        
        return $stmt->rowCount();
    }
}










